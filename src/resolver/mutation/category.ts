import { categoryModel } from "../../model";
import { Input, Output } from "req-res-formatter";

const mutationCategory = {
    createCategory: async (req: any, res: any) => {
        let categories;
        try {
            categories = await categoryModel.create(Input.create(req));
        } catch (e) {
            console.log(e);
        }

        return Output.response(req, categories, res);
    },
    updateCategory: async (req: any, res: any) => {
        let id: number, data: any;
        [data, id] = Input.update(req);
        const category = await categoryModel.findOneAndUpdate({ _id: id }, data, { new: true }).catch((e) => console.log(e));

        return Output.response(req, category, res);
    },
    deleteCategory: async (req: any, res: any) => {
        const id: number = Input.delete(req);
        const Category: { acknowledged: boolean; deletedCount: number } = await categoryModel.deleteOne({
            _id: id,
        });

        return Output.response(req, Category.deletedCount, res);
    },
};

export default mutationCategory;
