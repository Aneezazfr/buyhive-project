import React, {useState} from 'react'
import { ProductList } from './ProductList'
import SideBar from './SideBar'
import "./SearchCategory.css"
export const PageContent = () => {
    const [productCount, setProductCount] = useState<number>();
    const [showBox, setShowBox] = useState<boolean>(true);
    const [showList, setShowList] = useState<boolean>(false);
    // const showBox= ():boolean =>{ return true;}
    // const showList=():boolean => {return true; }
    const updateName = (count: number):void => {
        setProductCount(count)
    }
    const clickEvent1 = ():void => {
        console.log("clicked")
        setShowList(false)
        setShowBox(true)
        console.log({showBox})
    }
    const clickEvent2 = ():void => {
        console.log("clicked list")
        setShowBox(false)
        setShowList(true)
        console.log({showList})
    }
    
  return (
    <div>
        
        <div className='row'>
        <div className='col-md-3 col-sm-6 '>
            <div className='py-4 lead'>
              <span><b>Products </b></span>
              <span className='text-muted'>({productCount} products)</span>
            </div>
            <SideBar/>
        </div>
        <div className='col-md-9 col-sm-6'>
            <div className='py-4 text-muted'>Buy</div>
            <div className='d-flex pt-4 justify-content-between'>
                <div>
                    <button onClick={clickEvent1} className='border-0 bg-white'><img width="24" height="24" src="https://img.icons8.com/ios-filled/50/null/squared-menu.png"/></button>
                    <button  onClick={clickEvent2} className='border-0 bg-white'><img src="https://img.icons8.com/material-two-tone/24/null/bulleted-list.png"/></button>
                </div>
                <div >
                    <select className="rounded-pill px-5 py-2 select-arrow">
                        <option> Relevance </option>
                    </select>
                </div>
            </div>
            <ProductList setProductCount={setProductCount} showBox={showBox} showList={showList}/>
        </div>
        </div>
    </div>
  )
}

export default PageContent