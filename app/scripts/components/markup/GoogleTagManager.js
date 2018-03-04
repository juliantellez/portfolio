import React from 'react'

const __html = (`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-72315706-3');
`)

const tags = [
  <script key='gtag' async src='https://www.googletagmanager.com/gtag/js?id=UA-72315706-3' />,
  <script key='gtag-layer' dangerouslySetInnerHTML={{ __html }} />,
]

export default () => process.env.NODE_ENV === 'production' ? tags : null
