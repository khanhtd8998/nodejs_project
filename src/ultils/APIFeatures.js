class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
        this.page = 1;
        this.limit = 100;
    }

    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        const parsedQuery = JSON.parse(queryStr);
        if (parsedQuery.name) {
            this.query = this.query.find({ $text: { $search: parsedQuery.name } });
            delete parsedQuery.name;
        } else {
            this.query = this.query.find(parsedQuery);
        }
        const regexFields = ['description', 'brand'];
        regexFields.forEach(field => {
            if (parsedQuery[field]) {
                parsedQuery[field] = { $regex: new RegExp(parsedQuery[field], 'i') };
            }
        });
        this.query = this.query.find(parsedQuery);
        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select('-__v');
        }
        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    }
}
export default APIFeatures