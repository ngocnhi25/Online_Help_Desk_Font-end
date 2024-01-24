import React, { useEffect, useState } from 'react';
import { listRequest } from '../../apiEndpoints/requestView.api';


export default function RequestView() {
  const [listRequestData, setListRequestData] = useState({ data: [] });

  useEffect(() => {
    listRequest().then((res) => {
      const dataArray = Array.isArray(res.data.data) ? res.data.data : [];
      setListRequestData({ data: dataArray });
    });
  }, []);
console.log(listRequestData.data);

  return (
    <div className='relative shadow-md sm:rounded-lg bg-white mt-12 mb-12'>
      <h2> List Request </h2>
         <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
             ID
            </th>
            <th scope='col' className='px-6 py-3'>
              AccountName
            </th>
            <th scope='col' className='px-6 py-3'>
              Description
            </th>
            <th scope='col' className='px-6 py-3'>
              Create At
            </th>
            <th scope='col' className='px-6 py-3'>
            Status
            </th>
            <th scope='col' className='px-6 py-3'>
            Assignee 
            </th>
            <th scope='col' className='px-6 py-3'>
            Action
            </th>
          </tr>
        </thead>
        <tbody>
        {listRequestData.data.map((item) => (
            <tr key={item.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {item.id}
              </th>
              <td className='px-6 py-4'>{item.account.fullName}</td>
              <td className='px-6 py-4'>{item.description}</td>
              <td className='px-6 py-4'>{item.createdAt}</td>
              <td className='px-6 py-4'>{item.requestStatus.statusName} </td>
              <td className='px-6 py-4'></td>
              <td className='px-6 py-4'>
                {/* <Link to={`/edit/${item.id}`} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      <nav
        className='flex items-center flex-column flex-wrap md:flex-row justify-between pt-4'
        aria-label='Table navigation'
      >
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
          Showing <span className='font-semibold text-gray-900 dark:text-white'>1-10</span> of{' '}
          <span className='font-semibold text-gray-900 dark:text-white'>1000</span>
        </span>
        <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700'
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              5
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
