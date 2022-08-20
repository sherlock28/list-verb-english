/**
 * This was lifted from "React: Creating a Custom Hook for Pagination"
 * https://dev.to/admantium/react-creating-a-custom-hook-for-pagination-jni
 */
import { useState } from "react";

export function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    let begin = (currentPage - 1) * itemsPerPage;
    let end = begin + itemsPerPage;
    if (data.length < begin) {
      begin = 0;
      end = begin + itemsPerPage;
      return data.slice(begin, end);
    } 
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}
