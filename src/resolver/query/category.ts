import { categoryModel, ICategory } from "../../model";
import { Input, Output } from "req-res-formatter";

const queryCategory = {
    categories: async (req: any, res: any) => {
        let page: number, offset: number;
        [page, offset] = Input.list(req);
        let categories: ICategory[];

        if (page) {
            offset = offset ? offset : 5;
            categories = await categoryModel.find()
                .skip(Math.abs((page - 1) * offset))
                .limit(offset);
        } else {
            categories = await categoryModel.find();
        }

        return Output.response(req, categories, res);
    },

    category: async (req: any, res: any) => {
        const category = await categoryModel.findById(Input.detail(req));

        return Output.response(req, category, res);
    },
};

export default queryCategory;
