import React from 'react'
import Layout from '../components/layout'

const Review = props => {
  console.log(props)
  return (
    <Layout>
      <div class="rounded overflow-hidden shadow-2xl my-2">
        <img
          class="w-full"
          src={props.pageContext.album.albumart}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold font-mono text-xl mb-2">
            {props.pageContext.album.title}
          </div>
          <p class="text-grey-darker text-base">{props.pageContext.content}</p>
        </div>
        <div class="relative px-6 pb-6 mt-6">
          <span class="block opacity-75 -mb-1">By</span>
          <div class="flex justify-between">
            <span class="block font-semibold text-xl">
              {props.pageContext.author}
            </span>
            <div class="block bg-white rounded-full text-teal-300 text-xs font-bold px-3 py-2 leading-none flex items-center">
              <a href="" class="px-8">
                Like
              </a>
              <a>Share</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Review
