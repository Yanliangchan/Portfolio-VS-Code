// Change import statements to require()
const ArticleCard = require('../components/ArticleCard');
const styles = require('../styles/ArticlesPage.module.css');

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to/yanliangchan"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

// Change export statements to module.exports
async function getStaticProps() {
  try {
    const res = await fetch('https://dev.to/api/articles/me/published?per_page=6', {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY,
      },
    });

    if (!res.ok) {
      console.error('Failed to fetch articles:', res.statusText);
      return {
        props: { articles: [] },
      };
    }

    const data = await res.json();
    return {
      props: { articles: Array.isArray(data) ? data : [] },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: { articles: [] },
    };
  }
}

// Export both the page component and the data-fetching function
module.exports = {
  getStaticProps,
  ArticlesPage,
};
