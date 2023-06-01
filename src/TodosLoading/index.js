import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return (
        <>
        <div className="loading-page">
            <div className="title-container-skeleton">
                <div className="skeleton skeleton-text skeleton-text__body"></div>
            </div>

            <div className="search-container-skeleton skeleton">
            </div>

            <div className="list-container-skeleton">
                <div className="item-container-skeleton">
                    <div className="img-round skeleton"></div>
                    <p className="skeleton skeleton-text__body skeleton-text"></p>
                    <div className="img-round skeleton"></div>
                </div>
                <div className="item-container-skeleton">
                    <div className="img-round skeleton"></div>
                    <p className="skeleton skeleton-text__body skeleton-text"></p>
                    <div className="img-round skeleton"></div>
                </div>
                <div className="item-container-skeleton">
                    <div className="img-round skeleton"></div>
                    <p className="skeleton skeleton-text__body skeleton-text"></p>
                    <div className="img-round skeleton"></div>
                </div>
            </div>

            <div className="btn-container-skeleton">
                    <div className="skeleton"></div>
            </div>
         </div>
         </>
    );
}

export { TodosLoading };