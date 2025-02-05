import { FilterQuery, Query } from "mongoose";

class QuiryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;
    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    // for search 
    serach(searchableFields: string[]) {
        const searchTerm = this.query.searchTerm as string

        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map(
                    (field) =>
                        ({
                            [field]: { $regex: searchTerm, $options: "i" },
                        }) as FilterQuery<T>
                ),
            });
        }
        return this
    }

    // for sort 
    sort() {
        const sort =
            (this.query?.sort as string)?.split(",")?.join(" ") || "-createdAt";
        this.modelQuery = this.modelQuery.sort(sort as string);

        return this;
    }

    // for fields 
    fields() {
        const fields =
            (this.query?.fields as string)?.split(",")?.join(" ") || "-__v";

        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
}

export default QuiryBuilder