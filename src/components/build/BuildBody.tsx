import { useEffect } from "react";

import "../../styles/build/build.css";
import useCategories from "../../hooks/useCategories";

const BuildBody = () => {
  const { categories, error } = useCategories();

  type Category = { id: number; name: string };

  return (
    <div className="container--build-body">
      <div>
        <div className="build__tags">
          {categories.length > 0 &&
            categories.map((category: Category, i) => {
              if (category.name.indexOf(":") > -1) {
                const betterName = category.name.split(":")[1];
                return (
                  <div
                    className={`build__tag color--${(i % 4) + 1}`}
                    key={category.id}
                  >
                    {betterName}
                  </div>
                );
              }

              return (
                <div
                  className={`build__tag color--${(i % 4) + 1}`}
                  key={category.id}
                >
                  {category.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BuildBody;
