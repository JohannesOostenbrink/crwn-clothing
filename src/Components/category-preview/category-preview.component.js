import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, products}) => {
    return(
        <div className='category-preview-container'>
            <h2>
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products.filter((_,idx)=> idx<4)
                    .map((product)=> 
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </div>

        </div>
    )
}

export default CategoryPreview;

 {/* </div>
            {Object.keys(categoriesMap).map(title => (
            <Fragment key={title}>
                <h2>{title}</h2>
                <div className= 'products-container'>
                    {categoriesMap[title].map(product => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Fragment>
            ))}
        </Fragment> */}