export const PAGINATION_ITEMS_PER_PAGE = 3
export const paginationList = (total:number, numberOfItemsToRender : number = PAGINATION_ITEMS_PER_PAGE) => {
    const pages = Math.ceil(total / numberOfItemsToRender)
    const list = []; 
    for(let i = 0; i<pages; i++){
        list.push(i); 
    }
    return list; 
}