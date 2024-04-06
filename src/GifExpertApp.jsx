import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory onNewCategory={ onAddCategory }/>

        {/* LISTADO DE GIF */}
        <ol>
          { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
          }
        </ol>
            {/* GIF ITEM */}
    </>
  )
}
