import { Button } from '@/components/ui/button'
import { PaperPlaneIcon } from '@/components/ui/icon'
import { Textarea } from '@/components/ui/textarea'

export default function Chats() {
  return (
    <main className='grid place-items-center items-start'>
      <div className='grid w-[36rem] max-w-[calc(100vw-2rem)] grid-cols-1 gap-1 py-8'>
        <h2 className='font-styrene-display mb-8 mt-8 text-center text-6xl font-medium tracking-tighter sm:mb-12'>
          Welcome back
        </h2>
        <fieldset
          className='shadow-element top-4 grid w-full rounded-3xl bg-white/50 px-6 backdrop-blur-xl disabled:bg-white/50 
        sm:sticky sm:z-10 sm:grid-flow-col sm:grid-cols-[minmax(0,_1fr)_auto] sm:gap-2 sm:pr-3'
        >
          <div className='flex flex-grow items-center overflow-x-hidden'>
            <div className='flex w-full flex-col'>
              <div className='max-h-96 w-full overflow-y-auto break-words py-4'>
                <Textarea
                  className='m-0 w-full resize-none border-0 bg-transparent focus-visible:ring-0'
                  rows={1}
                  placeholder='Message Claude or search past chats...'
                />
              </div>
            </div>
          </div>
          <div className='-mr-3 grid grid-flow-col items-center gap-2 place-self-end pb-3 sm:mr-0 sm:place-self-auto sm:pb-0'>
            <Button className='shadow-element flex w-full cursor-pointer items-center overflow-x-hidden text-ellipsis whitespace-nowrap rounded-full px-2 py-2 text-sm transition-all ease-in-out active:scale-[0.98]'>
              <PaperPlaneIcon />
            </Button>
          </div>
        </fieldset>
        <div>
          <p className='mx-0 mb-4 mt-8 text-xl'>Yestoday</p>
          <ul className='grid gap-[0.5rem]'>
            <li className='shadow-element relative cursor-pointer overflow-x-hidden text-ellipsis whitespace-nowrap rounded-full bg-neutral-300 px-6 py-3 transition-transform ease-in-out active:scale-[0.98] [&[data-selected]]:bg-white'>
              Mocking Server-Sent Events in Postman
            </li>
            <li className='shadow-element relative cursor-pointer overflow-x-hidden text-ellipsis whitespace-nowrap rounded-full bg-neutral-300 px-6 py-3 transition-transform ease-in-out active:scale-[0.98] [&[data-selected]]:bg-white'>
              Mocking Server-Sent Events in Postman
            </li>
            <li className='shadow-element relative cursor-pointer overflow-x-hidden text-ellipsis whitespace-nowrap rounded-full bg-neutral-300 px-6 py-3 transition-transform ease-in-out active:scale-[0.98] [&[data-selected]]:bg-white'>
              Mocking Server-Sent Events in Postman
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
