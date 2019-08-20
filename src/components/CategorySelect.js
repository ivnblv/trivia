import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/triviaActions";
import { A } from "hookrouter";
import Loader from "react-loader-spinner";

const CategorySelect = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.trivia.categories);
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <div className="category-select">
      {categories.length > 0 ? (
        <React.Fragment>
          <div className="categories">
            {categories.map(category => (
              <A
                href={`/trivia/${category.id}`}
                className="category hover"
                key={category.id}
              >
                {category.name}
              </A>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <Loader
          className="container categories-loader"
          type="TailSpin"
          color="whitesmoke"
          height={100}
          width={100}
        />
      )}
    </div>
  );
};

export default CategorySelect;
