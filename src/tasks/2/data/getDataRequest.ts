import comments from "src/tasks/2/data/comments"
import authors from "src/tasks/2/data/authors"

const getDataRequest = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
        return {
            comments,
            authors
        };
};

export default getDataRequest
