import Image from 'next/image';
import ActivityCalendar from 'react-activity-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user, activityData }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <ActivityCalendar
          data={activityData}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  try {
    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const user = userRes.ok ? await userRes.json() : null;

    // Fetch repository data
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const repos = repoRes.ok ? await repoRes.json() : [];

    return {
      props: {
        user: user || { avatar_url: '', login: '', public_repos: 0, followers: 0 }, // Default values
        repos: Array.isArray(repos)
          ? repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6)
          : [], // Ensure repos is an array
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return {
      props: {
        user: { avatar_url: '', login: '', public_repos: 0, followers: 0 }, // Default values
        repos: [], // Fallback to an empty array
      },
    };
  }
}


export default GithubPage;
