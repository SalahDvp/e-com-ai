/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ilpAQ11BEel
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 "use client"

 import { useState } from "react"
 import { Button } from "@/components/ui/button"
 import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
 import { Checkbox } from "@/components/ui/checkbox"
 import { useToast } from "@/components/ui/use-toast";
 export default function Component() {
   const [orders, setOrders] = useState([])
   const { toast } = useToast();
   const [isLoading, setIsLoading] = useState(false)
   const [selectedOrders, setSelectedOrders] = useState([])

   const handleRetrieveOrders_ = () => {
    const newOrders = [
      {
        id: 6,
        firstName: "Sarah",
        lastName: "Wilson",
        city: "Seattle",
        state: "WA",
        orderDate: "2023-06-25",
        sku: "PROD-006",
        amount: 39.99,
        shippingMethod: "Home Delivery",
        total: 44.99,
      },
    ]
    setOrders([...orders, ...newOrders])
  }
   const handleRetrieveOrders = async () => {
     setIsLoading(true)
     try {
       const newOrders = [
         {
           id: 1,
           firstName: "John",
           lastName: "Doe",
           city: "New York",
           state: "NY",
           orderDate: "2023-06-01",
           sku: "PROD-001",
           amount: 49.99,
           shippingMethod: "Home Delivery",
           total: 54.99,
         },
         {
           id: 2,
           firstName: "Jane",
           lastName: "Smith",
           city: "Los Angeles",
           state: "CA",
           orderDate: "2023-06-05",
           sku: "PROD-002",
           amount: 29.99,
           shippingMethod: "Pick-up",
           total: 29.99,
         },
         {
           id: 3,
           firstName: "Michael",
           lastName: "Johnson",
           city: "Chicago",
           state: "IL",
           orderDate: "2023-06-10",
           sku: "PROD-003",
           amount: 99.99,
           shippingMethod: "Home Delivery",
           total: 109.99,
         },
         {
           id: 4,
           firstName: "Emily",
           lastName: "Brown",
           city: "Houston",
           state: "TX",
           orderDate: "2023-06-15",
           sku: "PROD-004",
           amount: 19.99,
           shippingMethod: "Pick-up",
           total: 19.99,
         },
         {
           id: 5,
           firstName: "David",
           lastName: "Lee",
           city: "Miami",
           state: "FL",
           orderDate: "2023-06-20",
           sku: "PROD-005",
           amount: 79.99,
           shippingMethod: "Home Delivery",
           total: 89.99,
         },
         {
           id: 6,
           firstName: "Sarah",
           lastName: "Wilson",
           city: "Seattle",
           state: "WA",
           orderDate: "2023-06-25",
           sku: "PROD-006",
           amount: 39.99,
           shippingMethod: "Home Delivery",
           total: 44.99,
         },
       ]
       setOrders(newOrders)
     } catch (error) {
       console.error("Error fetching orders:", error)
     } finally {
       setIsLoading(false)
     }
   }

    const handleAddNewOrder = () => {
        setTimeout(() => {
          toast({
            title: "Orders added!",
            description: "Orders added Successfully",
          })
        }, 2000)
       }
   const handleSelectAllOrders = () => {
     setSelectedOrders(orders.map((order) => order.id))
   }
   const handleSelectOrder = (orderId) => {
     if (selectedOrders.includes(orderId)) {
       setSelectedOrders(selectedOrders.filter((id) => id !== orderId))
     } else {
       setSelectedOrders([...selectedOrders, orderId])
     }
   }
   return (
     <section className="w-full h-full py-12 flex items-center justify-center">
       <div className="container px-4 md:px-6 grid gap-8">
         {orders.length === 0 && (


                <div className="flex flex-col items-center justify-center h-screen space-y-6">
                <PodcastIcon className="w-12 h-12 text-muted-foreground" />
                <h2 className="text-xl font-bold">View and manage your recent orders.</h2>
                <p className="text-muted-foreground">Retrieving orders...</p>
                <Button className="mt-4" variant="default" onClick={handleRetrieveOrders}>
                Press to retrieve orders
                </Button>
                </div>







          
         )}
         {orders.length > 0 && (
             <div className="container px-4 md:px-6 grid gap-8">
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
               <div className="grid gap-1">
                 <h1 className="text-2xl font-bold tracking-tight">Recent Orders</h1>
                 <p className="text-muted-foreground">View and manage your recent orders.</p>
               </div>
              
                 {!isLoading && (
 <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={handleRetrieveOrders_}>
                        <SearchIcon className="h-4 w-4 mr-2" />
                        Retrieve Orders
                </Button>

                   <Button variant="outline" onClick={handleAddNewOrder}>
                       <UploadIcon className="h-4 w-4 mr-2" />
                     Upload to Shipping
                   </Button>
                   </div>
                 )}
            
             </div>
             <div className="border shadow-sm rounded-lg overflow-hidden">
               {isLoading ? (
                 <div className="flex items-center justify-center py-8">
                   <div />
                 </div>
               ) : (
                 <Table>
                   <TableHeader>
                     <TableRow>
                       <TableHead>
                         <Checkbox
                           checked={selectedOrders.length === orders.length}
                           onCheckedChange={handleSelectAllOrders}
                         />
                       </TableHead>
                       <TableHead>Customer</TableHead>
                       <TableHead>City</TableHead>
                       <TableHead>State</TableHead>
                       <TableHead>Order Date</TableHead>
                       <TableHead>SKU</TableHead>
                       <TableHead>Amount</TableHead>
                       <TableHead>Shipping</TableHead>
                       <TableHead>Total</TableHead>
                     </TableRow>
                   </TableHeader>
                   <TableBody>
                     {orders.map((order) => (
                       <TableRow key={order.id}>
                         <TableCell>
                           <Checkbox
                             checked={selectedOrders.includes(order.id)}
                             onCheckedChange={() => handleSelectOrder(order.id)}
                           />
                         </TableCell>
                         <TableCell>
                           {order.firstName} {order.lastName}
                         </TableCell>
                         <TableCell>{order.city}</TableCell>
                         <TableCell>{order.state}</TableCell>
                         <TableCell>{order.orderDate}</TableCell>
                         <TableCell>{order.sku}</TableCell>
                         <TableCell>${order.amount.toFixed(2)}</TableCell>
                         <TableCell>{order.shippingMethod}</TableCell>
                         <TableCell>${order.total.toFixed(2)}</TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               )}
             </div>
           </div>
         )}
       </div>
     </section>
   )
 }
 function PodcastIcon(props) {
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      )
    }

    function UploadIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
        )
      }

      function SearchIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        )
      }