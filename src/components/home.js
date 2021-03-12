import React from 'react'
import NewUrl from './NewUrl'
import UrlFeed from './UrlLists'


export default function home() {
    return (
        <div>
            <UrlFeed/>
            <NewUrl/>
            <UrlFeed/>
        </div>
    )
}
