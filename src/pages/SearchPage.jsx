import { Link } from '@mui/material'
import React from 'react'
import Search from '../components/Search'
import { AccountCircle, Apps, Settings } from '@mui/icons-material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import './SearchPage.css'
import { useStateValue } from '../../stateProvider';
import useGoogleSearch from '../../useGoogle';
const SearchPage = () => {
const [{term}]=useStateValue();
console.log(term);

const {data}=useGoogleSearch(term);
console.log(data);

  return (
    <div className="main">
        <div className="searchpage">
        <div className="searchpage-header">
          <a href="/" >
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" srcset="" />
            </a>
            </div>
           <div className="searchpage-headerbody">
            <Search  hidebuttons className="" />
            <div className="searchpage-options">
                <div className="searchpage-optionsleft">
                    <div className="searchpage-option">
                        <SearchIcon style={{color:"black", textDecoration:"underline"}} />
                        <Link style={{color:"black", textDecoration:"underline", fontSize:"20px"}} to="/all" >All</Link>
                    </div>
                    <div className="searchpage-option">
                      <VideoLibraryIcon />
                        <Link to="/videos">Videos</Link>
                    </div>
                    <div className="searchpage-option">
                       <ImageIcon />
                        <Link to="/images" >Images</Link>
                    </div>
                    <div className="searchpage-option">
               <CollectionsBookmarkIcon />
                        <Link to="/books">Books</Link>
                    </div>
                    <div className="searchpage-option">
                     <NewspaperIcon />
                        <Link to="/news">News</Link></div>
                        <div className="searchpage-option">
                            <MoreVertIcon />
                            <Link to="/more">
                                More
                            </Link>
                        </div>
                </div>
               
            </div>
       
        </div>
        <div className="header-right">
        <div className="searchpage-optionsright">
                    
                    <div className="searchpage-option">
                        <Settings />
                        
                      
                    </div>
                    <div className="searchpage-option"><Apps /></div>
                    <div className="searchpage-option">  <AccountCircle /></div>
                
            </div>
        </div>
    </div>
{
    term &&
(<div className="searchpage-results">
    <p className="result-count">
    About {data?.searchInformation.formattedTotalResults} result in ({data?.searchInformation.formattedSearchTime}s) for {term}
    </p>

{
    data?.items.map((item)=>
(
<div className="searchpage-result">
        <a href={item.link} className='searchpage-resultlink'>
            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
            <img src={item.pagemap?.cse_image[0]?.src} alt="" srcset="" />
            )}
        <p>{item.displayLink}</p>
        </a>
        <a href={item.link} className='searchpage-resulttitle'>
            <h3>{item.title}</h3>
        </a>
        <p className='searchpage-resultDesc'>{item.snippet}</p>

    </div>
)
    )
}
    
    
    
    
</div>)
}


    </div>
  )
}

export default SearchPage