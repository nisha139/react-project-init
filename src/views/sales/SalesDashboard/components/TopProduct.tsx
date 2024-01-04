import Card from '@/components/ui/Card'
import Table from '@/components/ui/Table'
import Radio from '@/components/ui/Radio'
import {Field, Form, Formik} from 'formik'
import {FormItem, FormContainer} from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Checkbox from '@/components/ui/Checkbox'
import DoubleSidedImage from "../../../../components/shared/DoubleSidedImage";

type Product = {
    id: string
    name: string
    img: string
    sold: number
}

type TopProductProps = {
    data?: Product[]
    className?: string
}

const {Tr, Td, TBody, THead, Th} = Table


const TopProduct = ({data = [], className}: TopProductProps) => {

    return (
        <Card className={className}>
            <p className="mb-2">Pay with</p>
            <Radio.Group vertical value={"banana"} className="w-[100%]">
                <div className="grid gap-4 border-[1px] p-4 rounded-md">
                    <Radio value="saved">
                        Save with Bkash
                    </Radio>
                </div>
                <div className="grid grid-cols-3 gap-4 border-[1px] p-4 rounded-md mt-2">
                    <Radio value="bkash">
                        Bkash
                    </Radio>
                </div>
                <div className="grid gap-4 border-[1px] p-4 rounded-md mt-2">
                    <Radio value="master">
                        Visa / Master / Amex
                    </Radio>
                </div>
            </Radio.Group>
            <div className="mt-5">
                <Checkbox defaultChecked className="mb-5">
                    Get Recharge Receipt by Email
                </Checkbox>
                <Formik
                    initialValues={{
                        email: '',
                        userName: '',
                        password: '',
                        rememberMe: false,
                    }}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                            resetForm()
                        }, 400)
                    }}
                >
                    {({ touched, errors, resetForm }) => (
                        <Form>
                            <FormContainer>
                                <FormItem
                                    label="Email Address"
                                >
                                    <Field
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        placeholder="Enter email address"
                                        component={Input}
                                    />
                                </FormItem>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
                <div className="w-[100%]">
                    <DoubleSidedImage
                        src="/img/recharge.jpeg"
                        darkModeSrc="/img/products/product-1.jpg"
                        alt="No product found!"
                        className="w-[100%]"
                    />
                </div>
            </div>
            <div>

            </div>
        </Card>
    )
}

export default TopProduct
