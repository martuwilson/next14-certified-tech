import { PageType } from "@/types/pagination.types";
import { UserType } from "../../types/user.types";
import { httpGetPublic } from "../common/http.service";
import { URLSearchParams } from 'url';
import { TrendingHashtag } from "@/types/hash.types";

class ExploreApi {
    getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> => httpGetPublic(`explore/trending`, new URLSearchParams({
        page: `${page}`,
        size: `${size}`
    }));

    getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingHashtag>> => httpGetPublic(`explore/follow-recommendations`, new URLSearchParams({
        page: `${page}`,
        size: `${size}`
    }));
    
}

const exploreApi = new ExploreApi();

export default exploreApi;