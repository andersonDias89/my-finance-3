import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { HiUserAdd } from 'react-icons/hi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FormAddContacts } from '../Forms/FormAddContact'


export const ModalFormAddContact = () => {
    const [open, setOpen] = useState(false)
    return (

        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-primary bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-box py-6 shadow-xl">
                                            <div className="px-4 sm:px-6 w-4/5 m-auto flex items-center justify-center space-x-1 ">
                                                <span className='text-4xl text-blueLight'><AiOutlineUsergroupAdd /></span>
                                                <Dialog.Title className="text-lg font-medium text-slate-200">Cadastrar novo contato</Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">

                                                <div className="absolute inset-0 px-4 sm:px-6">
                                                    <FormAddContacts />
                                                </div>
                                                {/* /End replace */}
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            <div className="w-full h-10 overflow-hidden rounded-lg">
                <button
                    type='button'
                    onClick={() => setOpen(true)}
                    className="space-x-1 w-full h-full bg-blueLight hover:bg-blueLightHover font-black text-slate-100 flex items-center justify-center">
                    <span className='text-lg'><HiUserAdd /></span>
                    <span className='text-sm'>Add Contato</span>
                </button>
            </div>
        </div>
    )
}