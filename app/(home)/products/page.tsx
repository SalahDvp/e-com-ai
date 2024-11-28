/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VdzY7XUMzkF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast";

export default function Component() {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false)
  const [images, setImages] = useState([])
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Watch CASIO",
      status: "Draft",
      price: 499.99,
      totalSales: 25,
      createdAt: "2023-07-12 10:42 AM",
      quantity: 100,
      sku: "SKU-123",
      color: "Black",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnS_l0MoluoNPaQuTqp5jPDviAzWRfyKm3g&s"
    },
    {
      id: 2,
      name: "Nike Dri-FIT Rise Structured Snapback Cap",
      status: "Published",
      price: 29.99,
      totalSales: 100,
      createdAt: "2023-06-15 09:30 AM",
      quantity: 200,
      sku: "SKU-456",
      color: "Blue",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1nAMOzZPaLBgZcw7y_maql4lEPSoAJuoMQ&s"
    },
    {
      id: 3,
      name: "Electric Scooter - Scooter Hut",
      status: "Published",
      price: 199.99,
      totalSales: 50,
      createdAt: "2023-05-10 11:00 AM",
      quantity: 50,
      sku: "SKU-789",
      color: "Red",
      image: "https://scooterhut.com.au/cdn/shop/files/RSSIDEedit-1080.jpg?v=1708652139&width=1024"
    }
  ])
  const [editingProduct, setEditingProduct] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  
  const handleImageUpload = (event) => {
    const files = event.target.files
    setImages([...images, ...Array.from(files)])
  }
  
  const handleRemoveImage = (index) => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    setImages(updatedImages)
  }
  
  const handleAddProduct = (product) => {
    setTimeout(() => {
      toast({
        title: "Product added!",
        description: "Product added Successfully",
      })
      console.log(product)
      setProducts([...products, product])
      setShowModal(false)
    }, 2000)
  }
  
  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setShowModal(true)
  }
  
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
    setTimeout(() => {
      toast({
        title: "Product deleted!",
        description: "Product deleted Successfully",
      })
    }, 2000)
  }
  
  const handleSaveProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)))
    setShowModal(false)
    setEditingProduct(null)
    setTimeout(() => {
      toast({
        title: "Product updated!",
        description: "Product updated Successfully",
      })
    }, 2000)
  }
  
  return (
    <div className="min-h-screen bg-background p-8">
    <div className="container mx-auto space-y-8">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            
          </Breadcrumb>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <FileIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
            </Button>
            <Button
              size="sm"
              className="h-8 gap-1"
              onClick={() => {
                setEditingProduct(null)
                setShowModal(true)
              }}
            >
              <CirclePlusIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <DownloadIcon className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Import</span>
            </Button>
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>Manage your products and view their sales performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Total Sales</TableHead>
                    <TableHead className="hidden md:table-cell">Created at</TableHead>
                    <TableHead className="hidden md:table-cell">Quantity</TableHead>
                    <TableHead className="hidden md:table-cell">SKU</TableHead>
                    <TableHead className="hidden md:table-cell">Color</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={product.image}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.status}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">${product.price}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.totalSales}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.createdAt}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.quantity}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.sku}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.color}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoveHorizontalIcon className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditProduct(product)}>Edit</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeleteProduct(product.id)}>Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <ProductModal
            product={editingProduct}
            onSave={(product) => {
              if (editingProduct) {
                handleSaveProduct(product)
              } else {
                handleAddProduct(product)
              }
            }}
            onCancel={() => setShowModal(false)}
            visible={showModal}
          />
        </main>
      </div>
    </div>
  )
}

function ProductModal({ product, onSave, onCancel, visible }) {
  const [name, setName] = useState(product ? product.name : "")
  const [price, setPrice] = useState(product ? product.price : "")
  const [quantity, setQuantity] = useState(product ? product.quantity : "")
  const [sku, setSku] = useState(product ? product.sku : "")
  const [color, setColor] = useState(product ? product.color : "")
  const [images, setImages] = useState(product ? [product.image] : [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: product ? product.id : Date.now(),
      name,
      status: "Draft",
      price,
      totalSales: 0,
      createdAt: new Date().toISOString(),
      quantity,
      sku,
      color,
      image: images[0],
    }
    onSave(newProduct)
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setImages([reader.result])
    }
    reader.readAsDataURL(file)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-4 bg-white rounded-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">{product ? "Edit Product" : "Add Product"}</h2>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" value={sku} onChange={(e) => setSku(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="color">Color</Label>
            <Input id="color" value={color} onChange={(e) => setColor(e.target.value)} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="image">Image</Label>
            <Input id="image" type="file" onChange={handleImageUpload} />
            {images.length > 0 && <img src={images[0]} alt="Product" className="mt-2 h-24 w-24 object-cover" />}
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function CirclePlusIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}


function DownloadIcon(props) {
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
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}