import './categories-menu.styles.scss'
import CategoryItem from './Components/category-item/category-item.component'

const categoriesMenu = ({categories}) => {

    return(

        categories.map((category) => (

        <CategoryItem 
        key = {category.id} 
        category={category} 
        />

        ))


    )

}

export default categoriesMenu;