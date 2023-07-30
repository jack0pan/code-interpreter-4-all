import * as React from 'react'

export type ChatGroupProps = {
  head?: React.ReactNode
  items: {
    uuid: string
    name: string
  }[]
}

export default function ChatGroup(props: ChatGroupProps) {
  const { head, items } = props
  return (
    <div role='presentation'>
      <p className='text-xl'>{head}</p>
      <ul className='grid gap-2'>
        {items.map((i) => {
          const { name, uuid } = i
          return (
            <li
              className='shadow-element relative cursor-pointer overflow-x-hidden text-ellipsis whitespace-nowrap rounded-full bg-neutral-300 px-6 py-3 transition-transform ease-in-out active:scale-[0.98] [&[data-selected]]:bg-white'
              key={uuid}
            >
              {name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
