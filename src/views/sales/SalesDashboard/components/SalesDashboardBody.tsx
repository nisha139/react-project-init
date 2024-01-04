import { useEffect } from 'react'
import Loading from '@/components/shared/Loading'
import Statistic from './Statistic'
import TopProduct from './TopProduct'
import { getSalesDashboardData, useAppSelector } from '../store'
import { useAppDispatch } from '@/store'
import Button from "@/components/ui/Button";
import Card from '@/components/ui/Card'
import Avatar from '@/components/ui/Avatar'

const SalesDashboardBody = () => {
    const dispatch = useAppDispatch()

    const dashboardData = useAppSelector(
        (state) => state.salesDashboard.data.dashboardData
    )

    const loading = useAppSelector((state) => state.salesDashboard.data.loading)

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = () => {
        dispatch(getSalesDashboardData())
    }

    return (
        <Loading loading={loading}>
            <Statistic data={dashboardData?.statisticData} />
            <Button className="mb-5 w-[33%]">
                + Add More Number
            </Button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <TopProduct data={dashboardData?.topProductsData} />
            </div>
            <div>
                <div className="grid grid-cols-4 lg:grid-cols-3 gap-4">
                    <Card>
                       <div className="flex">
                           <div className="mt-5 mr-3">
                               <Avatar
                                   size={24}
                                   shape="circle"
                                   src={`/img/call.png`}
                               />
                           </div>
                           <div>
                               <strong className="mb-4 block">200 Min</strong>
                               <div className="flex mb-2">
                                   <Avatar
                                       size={16}
                                       shape="circle"
                                       src={`/img/clock.png`}
                                   />
                                   <p className="text-xs ml-2"> 30 Days </p>
                               </div>
                               <b className="block text-xs">Tk. 157 </b>
                           </div>
                       </div>
                    </Card>
                </div>
            </div>
        </Loading>
    )
}

export default SalesDashboardBody
