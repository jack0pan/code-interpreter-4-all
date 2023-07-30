import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { FilePlusIcon, PaperPlaneIcon } from './ui/icon'

export default function PromptForm() {
  return (
    <div className='relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12'>
      <Button
        className='absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-4'
        variant='outline'
        size='sm'
      >
        <FilePlusIcon />
      </Button>
      <Textarea
        // className='min-h-[60px] w-full resize-none border-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none focus-visible:outline-none sm:text-sm'
        className='m-0 w-full resize-none border-0 bg-transparent p-0 px-4 py-[1.3rem] pl-12 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-[30px] md:pr-12'
        placeholder='Send a message'
        rows={1}
      />
      <div className='absolute right-0 top-4 sm:right-4'>
        <Button size='sm'>
          <PaperPlaneIcon />
        </Button>
      </div>
    </div>
  )
}
