| No | Method | Endpoint                   | Deskripsi                          | Status Code                              |
| -- | ------ | -------------------------- | ---------------------------------- | ---------------------------------------- |
| 1  | GET    | `/api/products`            | Menampilkan seluruh produk         | 200 OK                                   |
| 2  | GET    | `/api/products/1`          | Menampilkan produk dengan ID 1     | 200 OK                                   |
| 3  | POST   | `/api/products`            | Menambahkan produk baru            | 201 Created                              |
| 4  | PUT    | `/api/products/1`          | Mengubah seluruh data produk ID 1  | 200 OK                                   |
| 5  | PATCH  | `/api/products/1`          | Mengubah sebagian data produk ID 1 | 200 OK                                   |
| 6  | DELETE | `/api/products/1`          | Menghapus produk ID 1              | 200 OK                                   |
| 7  | POST   | `/api/products`            | Gagal tambah produk (tanpa name)   | 400 Bad Request                          |
| 8  | POST   | `/api/products`            | Gagal tambah produk (tanpa price)  | 400 Bad Request                          |
| 9  | PUT    | `/api/products/1`          | Gagal update produk (tanpa name)   | 400 Bad Request                          |
| 10 | GET    | `/api/products/crash/test` | Endpoint testing error             | 500 Internal Server Error                |
| 11 | GET    | `/api/health`              | Mengecek status server             | 200 OK                                   |
