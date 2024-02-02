
import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform"
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";


const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient
                    .get<FetchResponse<Platform>>('/platforms').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: platform.length, results: platform}
})
// const usePlatforms = () => ({data: platform, isLoading: false, error: false })

export default usePlatforms;