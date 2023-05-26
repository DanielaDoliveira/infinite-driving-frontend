
import tw from 'tailwind-styled-components';

export const Container = tw.main`

w-screen
m-0
p-0
bg-stone-950
text-[#D9D9D9]

`
export const ImageWallpaper = tw.div`
bg-[url('../images/carmobile.png')]
md:bg-[url('../images/car.png')]
w-45
md:w-full
bg-repeat-y

bg-cover

 md:h-screen
m-0
pb-[100%]


h-[100%]

`

export const Text = tw.div `
blur-none`