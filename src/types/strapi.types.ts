export type StrapiPaginationType = {
    "pageCount": number;
    "total": number;
    "page": number;
    "pageSize": number;
}

export type StrapiResultType<T> = { /* T es para genericos */
    "data": T[];
    "meta": {
        pagination: StrapiPaginationType;
    }
}