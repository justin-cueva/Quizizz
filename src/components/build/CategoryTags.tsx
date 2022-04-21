import "../../styles/build/build.css";
import "../../styles/generals.css";

import { Category } from "../../types";

type Props = {
  categories: Category[];
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<Category | undefined>
  >;
};

const CategoryTags = ({ categories, setSelectedCategory }: Props) => {
  return (
    <div>
      <div className="build__tags">
        {categories.length > 0 &&
          categories.map((category: Category, i) => {
            let name;
            if (category.name.indexOf(":") > -1)
              name = category.name.split(":")[1];
            else name = category.name;

            return (
              <div
                onClick={() => setSelectedCategory(category)}
                className={`build__tag color--${(i % 4) + 1}`}
                key={category.id}
              >
                {name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryTags;
