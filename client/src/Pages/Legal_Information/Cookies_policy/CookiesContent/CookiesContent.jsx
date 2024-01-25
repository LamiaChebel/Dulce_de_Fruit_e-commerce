import CookiesCard from "./CookiesCard.jsx";

import cookiesData from "./cookiesData.js";
/**
 *Component for showing policy cookies with 7 articles with the same structure
 * @component
 * @returns {ReactNode}
 */

function CookiesContent() {
  return (
    <div>
      {cookiesData.articles.map((article) => {
        return (
          <CookiesCard
            key={article.id}
            title={article.title}
            details={article.details}
          />
        );
      }) || <p>Contenu non disponible</p>}
    </div>
  );
}

export default CookiesContent;
