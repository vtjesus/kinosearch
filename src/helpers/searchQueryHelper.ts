interface ISearchQueryProps {
  page?: number;
  genres?: number[];
  search?: string;
}

export const generateSearchQuery = ({
  page = 1,
  genres = [],
  search = "",
}: ISearchQueryProps) => {
  let query = "";

  if (search) {
    query = `search=${search}`;
  }

  if (genres.length > 0) {
    if (query) {
      query += "&";
    }
    query += `genres=${JSON.stringify(genres)}`;
  }

  if (page != 1) {
    if (query) {
      query += "&";
    }
    query += `page=${page}`;
  }

  if (query) {
    query = "?" + query;
  }

  return query;
};
