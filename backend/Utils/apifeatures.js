class ApiFeatures{
    constructor(query , queryStr){``// query meanq ( Product.find() ) and queryStr means ( req.query )
        this.query = query,
        this.queryStr = queryStr
    }


    // search 
    search(){
        const keyword = this.queryStr.keyword ? {             //  this.queryStr.keyword = req.query.keyword = samosa
            name : {                                               // iska mtlb ki hmae name m search krna h 
                $regex: this.queryStr.keyword,
                $options:'i'
            }
        } :  {};
        // console.log(keyword)
        this.query = this.query.find({...keyword})
        return this;
    }



    // filter
    filter(){
        const queryCopy = {...this.queryStr}   // {...} use krne se reference copy milti h if dots use nhi krte to usse m change kr deta purane wale m 

        // Category ====
    //{Removing some fields fron erray}
    const removeFields = ["keyword" , "page" , "limit"]     // remove fields ko hmae remove krna h
    removeFields.forEach(key => delete queryCopy[key])





    // filter for price and rating  ye 2 lines hum isiliye likh rhe h kyuki mongoDB m $ chaiye hota h siiye
    let queryStr =  JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g , (key) => `$${key}`)


    // this.query = means ( product.find() )
    // this.queryStr = meanns jo bhi url mei sorting ki h uski value 




    // this.query = this.query.find(queryCopy)
    this.query = this.query.find(JSON.parse(queryStr))
    return this
    }





    // pagination 
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1
        const skip = resultPerPage * (currentPage - 1)
        this.query = this.query.limit(resultPerPage).skip(skip)

        return this
    }
}


module.exports = ApiFeatures;