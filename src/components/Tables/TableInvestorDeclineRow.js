import { Tr,Td,Flex,Text } from "@chakra-ui/react"


function TableInvestorDeclineRow(props) {
    const {name, email} = props
    return (
        <Tr>
            <Td p="15px">
                    <Text fontSize="md" fontWeight="bold">{name}</Text>
                    <Text fontSize="sm" fonttWeight="normal" > {email}</Text>
            </Td>
        </Tr>
    )
}

export default TableInvestorDeclineRow