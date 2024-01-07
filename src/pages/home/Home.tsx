/*
 * @Author: 蒋添任
 * @Date: 2023-09-23 23:25:19
 * @LastEditTime: 2023-11-22 22:07:11
 * @LastEditors: 蒋添任
 * @Description: 
 */
import './home.css';
import React from 'react';
const Home: React.FC = (props) => {
    const queryParams = window.location.search;
    const hasIdQueryParam = queryParams.includes('id=');
    // const {location:{query:{aaa}}} =props;
    // if(aaa) return (
    //     <div className="">ADFFDFFFF</div>
    // )


    return (
        <div>
          {/* {hasIdQueryParam ? <div className="qwe">123</div> :  <div className="qwe">456</div>} */}
          
        </div>
      );
}

export default Home