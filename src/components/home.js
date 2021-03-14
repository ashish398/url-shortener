import React from 'react'
import NewUrl from './NewUrl';
import UrlFeed from './UrlLists';
import Top from './top';


export default function home() {
    return (
        <div>
            <Top/>
            <br></br>
            <UrlFeed/>
            <br></br>
            <br></br>
            <NewUrl/>
        </div>
    )
}
