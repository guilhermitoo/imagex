import Head from 'next/head'
import React, { useEffect } from 'react'
import watermark from 'watermarkjs';

export default function Home() {
  
  useEffect(() => {
    // watermark(['/fb-share.jpg'])
    // .image(watermark.image.lowerRight('teste marca d`água','48px Josefin Slab', '#fff', 0.5))
    // .then(function (img) {
    //   document.getElementById('div1').appendChild(img);
    // });
  
    var watermarktext = `ESTE TEXTO É UMA MARCA D'ÁGUA!`;

    watermark(['/fb-share.jpg'])
    .image(watermark.text.lowerRight(watermarktext, '48px Josefin Slab', '#fff', 0.5))
    .render()
    .image(watermark.text.upperLeft(watermarktext, '48px Josefin Slab', '#fff', 0.5, 48))
    .render()
    .image(watermark.text.center(watermarktext, '48px Josefin Slab', '#fff', 0.5, 48))
    .then(function (img) {
      document.getElementById('div1').appendChild(img);    
    });    
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>ImageX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div id="div1">
          
        </div>
      </main>
        
    </div>
  )
}
