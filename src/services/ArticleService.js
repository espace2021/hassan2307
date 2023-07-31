
import Api from "../Axios/Api";
const ARTICLE_API="/articles"

export const fetchArticles=async()=> {
return await Api.get(ARTICLE_API);
}
export const fetchArticleById=async(articleId)=> {
return await Api.get(ARTICLE_API + '/' + articleId);
}
export const deleteArticle=async(articleId) =>{
return await Api.delete(ARTICLE_API + '/' + articleId);
}
export const addArticle=async(article)=> {
return await Api.post(ARTICLE_API, article);
}
export const editArticle=(article) =>{
return Api.put(ARTICLE_API + '/' + article._id, article);
}

export const fetchArticlesPagServ=async(page,pageSize)=> {
   
    let url = ARTICLE_API+ `/productspage?page=${page}&pagesize=${pageSize}`
  
    return await Api.get(url)
   }

export const fetchTot=async()=> {
    return await Api.get(ARTICLE_API+"/nombreTot/");
    } 

export const fetchArticleByScat=async(scategorieID)=> {
        return await Api.get(ARTICLE_API + '/scat/' + scategorieID);
        }    