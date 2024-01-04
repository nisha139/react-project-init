import Card from '@/components/ui/Card'
import { NumericFormat } from 'react-number-format'
import GrowShrinkTag from '@/components/shared/GrowShrinkTag'
import { useAppSelector } from '../store'
import dayjs from 'dayjs'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

type StatisticCardProps = {
    data?: {
        value: number
        growShrink: number
    }
    label: string
    valuePrefix?: string
    date: number
}

type StatisticProps = {
    data?: {
        revenue?: {
            value: number
            growShrink: number
        }
        orders?: {
            value: number
            growShrink: number
        }
        purchases?: {
            value: number
            growShrink: number
        }
    }
}

const StatisticCard = ({
    data = { value: 0, growShrink: 0 },
    label,
    valuePrefix,
    date,
}: StatisticCardProps) => {
    return (
        <Card>
            <div className="flex">
               <div className="flex-1 pr-4 border-r-[1px]">
                   <h6 className="font-semibold mb-4 text-sm">{label}</h6>
                   <div className="flex">
                       <div className="flex-1">
                           <Input placeholder="Type Number" />
                       </div>
                   </div>
               </div>
                <div className="flex-1 ml-5">
                    <h6 className="font-semibold mb-4 text-sm">TK.</h6>
                    <div className="flex">
                        <div className="flex-1">
                            <Input placeholder="Enter Amount" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-wrap inline-flex xl:flex items-center gap-2 mt-4">
                <Button shape="circle" className="pl-[1rem] pr-[1rem] pt-[2px] pb-[2px] border-green-700 h-8">$ 26</Button>
                <Button shape="circle" className="pl-[1rem] pr-[1rem] pt-[0.2rem] pb-[0.2rem] border-green-700 h-8">$ 57</Button>
                <Button shape="circle" className="pl-[1rem] pr-[1rem] pt-[0.2rem] pb-[0.2rem] border-green-700 h-8">$ 46</Button>
                <Button shape="circle" className="pl-[1rem] pr-[1rem] pt-[0.2rem] pb-[0.2rem] border-green-700 h-8">$ 28</Button>
                <Button shape="circle" className="pl-[1rem] pr-[1rem] pt-[0.2rem] pb-[0.2rem] border-green-700 h-8">$ 20</Button>
                <Button shape="circle" className="pl-[1rem] pr-[1rem] pt-[0.2rem] pb-[0.2rem] border-green-700 h-8">$ 47</Button>
            </div>
        </Card>
    )
}

const Statistic = ({ data = {} }: StatisticProps) => {
    const startDate = useAppSelector(
        (state) => state.salesDashboard.data.startDate
    )

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/*<StatisticCard*/}
            {/*    data={data.revenue}*/}
            {/*    valuePrefix="$"*/}
            {/*    label="Revenue"*/}
            {/*    date={startDate}*/}
            {/*/>*/}
            {/*<StatisticCard data={data.orders} label="Orders" date={startDate} />*/}
            <StatisticCard
                data={data.purchases}
                valuePrefix="$"
                label="Mobile Number"
                date={startDate}
            />

        </div>
    )
}

export default Statistic
