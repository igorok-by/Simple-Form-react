// import {
//   CLEAN_FILMS_DATA,
//   FETCH_FILMS_REQUEST,
//   FETCH_FILMS_SUCCESS,
//   FETCH_FILMS_FAILURE,
//   UPDATE_SEARCH_SENTENCE,
//   UPDATE_PAGE_COUNT,
//   ADD_FILM_TO_BOOKMARKS,
//   REMOVE_FILM_FROM_BOOKMARKS,
//   UPDATE_FILMS_BOOKMARKING,
// } from './actionTypes'
// import { IFilmItem, IFilmsData } from '../models'

// const cleanFilms = () => ({
//   type: CLEAN_FILMS_DATA,
// })

// const filmsRequested = () => ({
//   type: FETCH_FILMS_REQUEST,
// })

// const filmsLoaded = (filmsData: IFilmsData) => ({
//   type: FETCH_FILMS_SUCCESS,
//   payload: filmsData,
// })

// const filmsError = (error: Error) => ({
//   type: FETCH_FILMS_FAILURE,
//   payload: error,
// })

// const updateSearchSentence = (searchSentence: string) => ({
//   type: UPDATE_SEARCH_SENTENCE,
//   payload: searchSentence,
// })

// const updatePageCount = (newPageCount: number) => ({
//   type: UPDATE_PAGE_COUNT,
//   payload: newPageCount,
// })

// const addFilmToBookmarks = (bookmarkedFilm: IFilmItem) => ({
//   type: ADD_FILM_TO_BOOKMARKS,
//   payload: bookmarkedFilm,
// })

// const removeFilmFromBookmarks = (bookmarkedFilm: IFilmItem) => ({
//   type: REMOVE_FILM_FROM_BOOKMARKS,
//   payload: bookmarkedFilm,
// })

// const updateFilmsBookmarking = () => ({
//   type: UPDATE_FILMS_BOOKMARKING,
// })

// export {
//   cleanFilms,
//   updateSearchSentence,
//   updatePageCount,
//   fetchFilms,
//   addFilmToBookmarks,
//   removeFilmFromBookmarks,
//   updateFilmsBookmarking,
// }
