// Language translations
const translations = {
    english: {
        // Navigation
        "follow_us": "Follow us on",
        "help": "Help",
        "sign_up": "Sign Up",
        "login": "Login",
        "home": "Home",
        
        // Login Page
        "login_page_title": "Login - MAXLIDA Stationery Shop",
        "login_tagline": "The leading stationery shop in Malaysia",
        "login_description": "Quality stationery products for work, school, and creativity",
        "login_placeholder": "Email/Username/Phone",
        "password_placeholder": "Password",
        "login_button": "LOG IN",
        "forgot_password": "Forgot Password?",
        "or": "OR",
        "facebook": "Facebook",
        "google": "Google",
        "admin_staff_login": "Admin/Staff Login",
        "new_to_maxlida": "New to MAXLIDA?",
        "need_help": "Need help?",
        
        // Sign Up Page
        "signup_page_title": "Sign Up - MAXLIDA Stationery Shop",
        "phone_number_placeholder": "Phone Number",
        "next_button": "NEXT",
        "terms_agreement": "By signing up, you agree to MAXLIDA's",
        "terms_of_service": "Terms of Service",
        "privacy_policy": "Privacy Policy",
        "have_account": "Have an account?",
        
        // Cart Page
        "cart_page_title": "Shopping Cart - MAXLIDA Stationery Shop",
        "shopping_cart": "Shopping Cart",
        "product": "Product",
        "unit_price": "Unit Price",
        "quantity": "Quantity",
        "total_price": "Total Price",
        "actions": "Actions",
        "subtotal": "Subtotal",
        "shipping": "Shipping",
        "total": "Total",
        "checkout": "Checkout",
        "cart_note": "Free shipping for orders above RM 100",
        "voucher_placeholder": "Enter voucher code",
        "apply": "Apply",
        "voucher_applied": "Voucher Applied",
        
        // Admin/Staff Login Page
        "admin_login_title": "Admin/Staff Login",
        "admin_login_subtitle": "Access the management dashboard",
        "staff_id": "Staff ID",
        "staff_id_placeholder": "Enter your staff ID",
        "back_to_customer": "Back to customer login",
        
        // Admin Dashboard
        "admin_dashboard": "Admin Dashboard",
        "staff_dashboard": "Staff Dashboard",
        "dashboard_overview": "Dashboard Overview",
        "inventory_management": "Inventory Management",
        "product_management": "Product Management",
        "order_management": "Order Management",
        "customer_reviews": "Customer Reviews",
        "staff_management": "Staff Management",
        "sales_reports": "Sales Reports",
        "settings": "Settings",
        "logout": "Logout",
        "profile": "Profile",
        
        // Dashboard Stats
        "total_products": "Total Products",
        "total_orders": "Total Orders",
        "customers": "Customers",
        "revenue": "Revenue",
        "pending_orders": "Pending Orders",
        "new_reviews": "New Reviews",
        
        // Tables and Data
        "order_id": "Order ID",
        "customer": "Customer",
        "date": "Date",
        "amount": "Amount",
        "status": "Status",
        "action": "Action",
        "view": "View",
        "processing": "Processing",
        "delivered": "Delivered",
        "shipping": "Shipping",
        "cancelled": "Cancelled",
        "product_id": "Product ID",
        "product_name": "Product Name",
        "category": "Category",
        "current_stock": "Current Stock",
        "price": "Price",
        "restock": "Restock",
        "image": "Image",
        "actions": "Actions",
        "view_all": "View All",
        
        // Product Management
        "add_new_item": "Add New Item",
        "search_products": "Search products...",
        "all_categories": "All Categories",
        "notebooks": "Notebooks",
        "pens": "Pens & Markers",
        "office": "Office Supplies",
        "art": "Art Supplies",
        "stock_status": "Stock Status",
        "in_stock": "In Stock",
        "low_stock": "Low Stock",
        "out_of_stock": "Out of Stock",
        
        // Reviews
        "recent_reviews": "Recent Customer Reviews",
        "approve": "Approve",
        "reply": "Reply",
        "remove": "Remove",
        "review_content_notebook": "The quality of this notebook is exceptional! The paper is thick and doesn't bleed through. I love the hardcover design and the elastic band keeps everything secure.",
        "review_content_pens": "The colors are vibrant and the pens write smoothly. I'm deducting one star because one of the pens dried out quickly, but overall I'm satisfied with my purchase.",
        
        // Inventory Management
        "search_inventory_placeholder": "Search inventory...",
        "inventory_list": "Inventory List",
        "update_inventory": "Update Inventory",
        "reorder_level": "Reorder Level",
        "status": "Status",
        "update": "Update",
        "view": "View",
        "all_status": "All Status",
        "export_inventory": "Export",
        
        // Product Management
        "search_products_placeholder": "Search products...",
        "product_list": "Product List",
        "add_new_product": "Add New Product",
        "edit": "Edit",
        "delete": "Delete",
        "wooden_desk_organizer": "Wooden Desk Organizer",
        "professional_watercolor_set": "Professional Watercolor Set",
        
        // Order Management
        "search_orders_placeholder": "Search orders...",
        "order_list": "Order List",
        "order_id": "Order ID",
        "customer": "Customer",
        "date": "Date",
        "amount": "Amount",
        "process": "Process",
        "ship": "Ship",
        "pending": "Pending",
        "processing": "Processing",
        "shipping": "Shipping",
        "delivered": "Delivered",
        "cancelled": "Cancelled",
        "export_orders": "Export",
        
        // Customer Reviews
        "search_reviews_placeholder": "Search reviews...",
        "review_list": "Review List",
        "all_ratings": "All Ratings",
        "five_stars": "5 Stars",
        "four_stars": "4 Stars",
        "three_stars": "3 Stars",
        "two_stars": "2 Stars",
        "one_star": "1 Star",
        "approved": "Approved",
        "rejected": "Rejected",
        
        // Staff Management
        "search_staff_placeholder": "Search staff...",
        "staff_list": "Staff List",
        "staff_id": "Staff ID",
        "name": "Name",
        "email": "Email",
        "role": "Role",
        "joined_date": "Joined Date",
        "add_new_staff": "Add New Staff",
        "all_roles": "All Roles",
        "manager": "Manager",
        "sales": "Sales",
        "inventory": "Inventory",
        "customer_service": "Customer Service",
        "deactivate": "Deactivate",
        
        // Sales Reports
        "generate_report": "Generate Report",
        "export_pdf": "Export PDF",
        "sales_summary": "Sales Summary",
        "total_revenue": "Total Revenue",
        "growth": "Growth",
        "conversion_rate": "Conversion Rate",
        "daily": "Daily",
        "weekly": "Weekly",
        "monthly": "Monthly",
        "yearly": "Yearly",
        "sales_chart": "Sales Chart",
        "top_products": "Top Products",
        "units_sold": "Units Sold",
        "revenue": "Revenue",
        "trend": "Trend",
        
        // Settings
        "general_settings": "General Settings",
        "store_name": "Store Name",
        "store_email": "Store Email",
        "store_phone": "Store Phone",
        "store_address": "Store Address",
        "default_language": "Default Language",
        "timezone": "Timezone",
        "save_changes": "Save Changes",
        "cart_empty": "Your cart is empty",
        "cart_empty_message": "Looks like you haven't added any items to your cart yet.",
        "continue_shopping": "Continue Shopping",
        
        // Checkout Page
        "checkout_page_title": "Checkout",
        "checkout": "Checkout",
        "shipping": "Shipping",
        "payment": "Payment",
        "review": "Review",
        "shipping_method": "Shipping Method",
        "delivery": "Delivery",
        "in_store_pickup": "In-Store Pickup",
        "pickup_location": "Pickup Location",
        "maxlida_main_store": "MAXLIDA Main Store",
        "operating_hours": "Operating Hours",
        "delivery_address": "Delivery Address",
        "change": "Change",
        "products_ordered": "Products Ordered",
        "product_care": "Product Care Service Programme",
        "product_care_desc": "Protect your purchase with coverage against damage, fire, flood, and theft with zero-cost, click-and-collect repair and free returns with same-day replacement, Repair/Replace, and Delivery Service.",
        "payment_method": "Payment Method",
        "online_banking": "Online Banking",
        "credit_debit_card": "Credit/Debit Card",
        "cash_on_delivery": "Cash on Delivery",
        "ewallet": "E-Wallet",
        "order_summary": "Order Summary",
        "voucher_discount": "Voucher / Discount",
        "select": "Select",
        "merchandise_subtotal": "Merchandise Subtotal",
        "product_care_program": "Product Care Program (1 item)",
        "shipping_subtotal": "Shipping Subtotal",
        "shipping_fee": "Shipping Fee (SST 6%)",
        "total_payment": "Total Payment",
        "order_tax": "Order Tax (6% SST included, where applicable)",
        "terms_agreement": "By clicking \"Place Order\", you are agreeing to MAXLIDA's Product Protection",
        "place_order": "Place Order",
        
        // Checkout Page
        "checkout_page_title": "Checkout - MAXLIDA Stationery Shop",
        "checkout": "Checkout",
        "shipping": "Shipping",
        "payment": "Payment",
        "review": "Review",
        "delivery_address": "Delivery Address",
        "change": "Change",
        "products_ordered": "Products Ordered",
        "payment_method": "Payment Method",
        "online_banking": "Online Banking",
        "credit_debit_card": "Credit/Debit Card",
        "cash_on_delivery": "Cash on Delivery",
        "ewallet": "E-Wallet",
        "order_summary": "Order Summary",
        "merchandise_subtotal": "Merchandise Subtotal",
        "product_care_program": "Product Care Program",
        "shipping_subtotal": "Shipping Subtotal",
        "shipping_fee": "Shipping Fee (SST 6%)",
        "total_payment": "Total Payment",
        "order_tax": "Order Tax (6% SST included, where applicable)",
        "terms_agreement": "By clicking \"Place Order\", you are agreeing to Shopee's Product Protection",
        "terms_conditions": "Terms & Conditions",
        "place_order": "Place Order",
        "product_care": "Product Care Service Programme",
        "product_care_desc": "Protect your purchase with coverage against damage, fire, flood, and theft with zero-cost, click-and-collect repair and free returns with same-day replacement, Repair/Replace, and Delivery Service.",
        
        // Search
        "search_placeholder": "Search for products...",
        
        // Category Navigation
        "browse_categories": "Browse Categories",
        "notebooks": "Books",
        "pens_pencils": "Pens & Pencils",
        "art_supplies": "Art Supplies",
        "office_supplies": "Office Supplies",
        "school_essentials": "School Essentials",
        "books": "Books",
        "fashion": "Fashion",
        "journals": "Journals",
        "craft_supplies": "Craft Supplies",
        "desk_accessories": "Desk Accessories",
        "desk": "Desk",
        "electronic": "Electronic",
        
        // Flash Sale
        "flash_sale": "Flash Sale",
        "see_all": "See All",
        "ending_in": "ENDING IN",
        "hours": "Hours",
        "minutes": "Minutes",
        "seconds": "Seconds",
        "sold": "sold",
        
        // Featured, Popular, New Items
        "featured_items": "Featured Items",
        "popular_items": "Popular Items",
        "new_arrivals": "New Arrivals",
        
        // Product Detail Page
        "premium_hardcover_notebook_full": "Premium Leather Journal Notebook, Lined Paper, A5 Size, Suitable For Work, Note-Taking, Business, Travel, Daily Journaling, 200 Pages",
        "view_all_reviews": "View All",
        "customer_service": "Customer Service",
        "help_center": "Help Center",
        "how_to_buy": "How to Buy",
        "returns_refunds": "Returns & Refunds",
        "about_maxlida": "About MAXLIDA",
        "about_us": "About Us",
        "privacy_policy": "Privacy Policy",
        "shocking_sale": "Shocking Sale",
        "payment_methods": "Payment Methods",
        "all_rights_reserved": "All Rights Reserved",
        "size": "Size",
        "a5_black": "A5 Black",
        "a5_brown": "A5 Brown",
        "quantity": "Qty:",
        "add_to_cart": "ADD TO CART",
        "shipping_to_malaysia": "Shipping to Malaysia",
        "free_shipping_info": "Free standard shipping on orders over RM80.00",
        "delivery_estimate": "Estimated to be delivered on 17/07/2025-22/07/2025",
        "cod_policy": "COD Policy",
        "learn_more": "Learn More",
        "return_policy": "Return Policy",
        "return_policy_link": "Return Policy",
        "shipping_security": "Shipping Security",
        "safe_payments": "Safe Payments",
        "secure_logistics": "Secure Logistics",
        "customer_service_badge": "Customer Service",
        "description": "Description",
        "product_description_text": "This premium leather journal notebook features high-quality lined paper that's perfect for writing, note-taking, and journaling. The hardcover design provides durability while the elegant appearance makes it suitable for professional settings.",
        "product_material": "Material: Premium PU leather cover with acid-free paper",
        "product_size": "Size: A5 (148 x 210 mm)",
        "product_pages": "Pages: 200 pages (100 sheets)",
        "product_paper_weight": "Paper weight: 100 GSM",
        "product_features": "Features: Elastic closure band, bookmark ribbon, inner pocket",
        "product_suitable_for": "Suitable for: Work notes, journaling, planning, sketching",
        "customer_reviews": "Customer Reviews (100+)",
        
        // Product Tags
        "tag_bestseller": "Bestseller",
        "tag_premium": "Premium",
        "tag_handcrafted": "Handcrafted",
        "tag_artist_choice": "Artist Choice",
        "tag_eco_friendly": "Eco-friendly",
        "tag_tech": "Tech",
        "tag_sustainable": "Sustainable",
        "tag_energy_efficient": "Energy Efficient",
        "tag_value_pack": "Value Pack",
        "tag_limited": "Limited Edition",
        
        // FAQ Questions
        "faq_lost_parcel": "[Order Delivery] How do I report a lost or suspicious parcel?",
        "faq_otp": "[My Account] Why do I not receive my verification code/One-Time Password (OTP)?",
        "faq_return_item": "[Return Refund] How do I return a defective/wrong item?",
        "faq_add_card": "[My Account] How do I add my credit card?",
        "faq_change_phone": "[My Account] How do I change my mobile phone number?",
        "faq_track_order": "[Order Tracking] How can I track my order status and proof delivery?",
        
        // Product Detail Page Additional
        "you_may_also_like": "You May Also Like",
        "helpful": "Helpful",
        "reviews_count": "(100+ Reviews)",
        
        // Help Page
        "help_header": "Hi, how can we help?",
        "search_placeholder_help": "Search...",
        "promo_banner": "SPECIAL PROMOTION: Free shipping on all orders above RM50! Use code FREE50 at checkout.",
        "categories": "Categories",
        "track_order": "Track My Order",
        "returns_refunds": "Returns & Refunds",
        "shipping_delivery": "Shipping & Delivery",
        "payment": "Payment",
        "deals_discounts": "Deals & Discounts",
        "account": "Account",
        "hot_questions": "Hot Questions",
        "other_questions": "Do You Have Any Other Questions?",
        "contact_support": "Contact our support team at support@maxlida.com",
        
        // Product Names
        "premium_hardcover_notebook": "Premium Hardcover Notebook",
        "colorful_gel_pens": "10-Piece Colorful Gel Pen Set",
        "wooden_desk_organizer": "Wooden Desk Organizer",
        "professional_watercolor_set": "Professional Watercolor Set",
        "bestseller_novel": "Bestseller Novel - Hardcover",
        "washi_tape_set": "Decorative Washi Tape Set (10 pieces)",
        "pastel_highlighters": "Pastel Highlighter Set (10 Colors)",
        "designer_sticky_notes": "Designer Sticky Notes Collection",
        "weekly_planner": "2025 Weekly Planner with Stickers",
        "smooth_gel_pens": "Smooth Gel Pens (0.5mm) 12-Pack",
        "smart_notebook": "Smart Reusable Notebook",
        "desk_organizer_charger": "Desk Organizer with Wireless Charger",
        "bamboo_desk_set": "Bamboo Desk Accessory Set",
        "led_desk_lamp": "Adjustable LED Desk Lamp with USB Port",
        
        // Category Page
        "filter_products": "Filter Products",
        "search_filter": "SEARCH FILTER",
        "all_categories": "All Categories",
        "shipping_option": "Shipping Option",
        "same_day_delivery": "Same Day Delivery",
        "next_day_delivery": "Next Day Delivery",
        "two_day_delivery": "2-Day Delivery",
        "self_collection": "Self Collection Point",
        "brand": "Brand",
        "payment_option": "Payment Option",
        "installment": "Installment",
        "cash_on_delivery": "Cash On Delivery",
        "rating": "Rating",
        "price_range": "Price Range",
        "apply": "APPLY",
        "clear_all": "CLEAR ALL",
        "sort_by": "Sort by:",
        "more": "More",
        "popular": "Popular",
        "latest": "Latest",
        "top_sales": "Top Sales",
        "price": "Price",
        "five_stars": "★★★★★",
        "four_stars_up": "★★★★☆ & Up",
        "three_stars_up": "★★★☆☆ & Up",
        "two_stars_up": "★★☆☆☆ & Up",
        "min_price": "RM MIN",
        "max_price": "RM MAX",
        "discount_percent": "{percent}% OFF",
        "credit_debit": "Credit/Debit",
        "premium_leather_journal": "Premium Leather Journal",
        "professional_art_sketchbook": "Professional Art Sketchbook",
        "recycled_paper_notebook": "Recycled Paper Notebook",
        "dotted_journal": "Dotted Journal for Bullet Journaling",
        "pastel_notebook_set": "Pastel Notebook Set (3 pcs)"
    },
    malay: {
        // Navigation
        "follow_us": "Ikuti kami di",
        "help": "Bantuan",
        "sign_up": "Daftar",
        "login": "Log Masuk",
        "home": "Laman Utama",
        
        // Admin/Staff Login Page
        "admin_login_title": "Log Masuk Admin/Staf",
        "admin_login_subtitle": "Akses papan pemuka pengurusan",
        "staff_id": "ID Staf",
        "staff_id_placeholder": "Masukkan ID staf anda",
        "back_to_customer": "Kembali ke log masuk pelanggan",
        
        // Admin Dashboard
        "admin_dashboard": "Papan Pemuka Admin",
        "staff_dashboard": "Papan Pemuka Staf",
        "dashboard_overview": "Gambaran Keseluruhan",
        "inventory_management": "Pengurusan Inventori",
        "product_management": "Pengurusan Produk",
        "order_management": "Pengurusan Pesanan",
        "customer_reviews": "Ulasan Pelanggan",
        "staff_management": "Pengurusan Staf",
        "sales_reports": "Laporan Jualan",
        "settings": "Tetapan",
        "logout": "Log Keluar",
        "profile": "Profil",
        
        // Dashboard Stats
        "total_products": "Jumlah Produk",
        "total_orders": "Jumlah Pesanan",
        "customers": "Pelanggan",
        "revenue": "Pendapatan",
        "pending_orders": "Pesanan Tertunggak",
        "new_reviews": "Ulasan Baharu",
        
        // Tables and Data
        "order_id": "ID Pesanan",
        "customer": "Pelanggan",
        "date": "Tarikh",
        "amount": "Jumlah",
        "status": "Status",
        "action": "Tindakan",
        "view": "Lihat",
        "processing": "Diproses",
        "delivered": "Dihantar",
        "shipping": "Penghantaran",
        "cancelled": "Dibatalkan",
        "product_id": "ID Produk",
        "product_name": "Nama Produk",
        "category": "Kategori",
        "current_stock": "Stok Semasa",
        "price": "Harga",
        "restock": "Tambah Stok",
        "image": "Imej",
        "actions": "Tindakan",
        "view_all": "Lihat Semua",
        
        // Product Management
        "add_new_item": "Tambah Item Baru",
        "search_products": "Cari produk...",
        "all_categories": "Semua Kategori",
        "notebooks": "Buku Nota",
        "pens": "Pen & Penanda",
        "office": "Alat Tulis Pejabat",
        "art": "Alat Seni",
        "stock_status": "Status Stok",
        "in_stock": "Ada Stok",
        "low_stock": "Stok Rendah",
        "out_of_stock": "Kehabisan Stok",
        
        // Reviews
        "recent_reviews": "Ulasan Pelanggan Terkini",
        "approve": "Lulus",
        "reply": "Balas",
        "remove": "Buang",
        "review_content_notebook": "Kualiti buku nota ini luar biasa! Kertasnya tebal dan dakwat tidak menembusi. Saya suka reka bentuk kulit keras dan jalur elastik yang memastikan semuanya selamat.",
        "review_content_pens": "Warnanya terang dan pen menulis dengan lancar. Saya menolak satu bintang kerana salah satu pen cepat kering, tetapi secara keseluruhan saya berpuas hati dengan pembelian saya.",
        
        // Inventory Management
        "search_inventory_placeholder": "Cari inventori...",
        "inventory_list": "Senarai Inventori",
        "update_inventory": "Kemas Kini Inventori",
        "reorder_level": "Tahap Pesanan Semula",
        "status": "Status",
        "update": "Kemas Kini",
        "view": "Lihat",
        "all_status": "Semua Status",
        "export_inventory": "Eksport",
        
        // Product Management
        "search_products_placeholder": "Cari produk...",
        "product_list": "Senarai Produk",
        "add_new_product": "Tambah Produk Baru",
        "edit": "Edit",
        "delete": "Padam",
        "wooden_desk_organizer": "Pengatur Meja Kayu",
        "professional_watercolor_set": "Set Cat Air Profesional",
        
        // Order Management
        "search_orders_placeholder": "Cari pesanan...",
        "order_list": "Senarai Pesanan",
        "order_id": "ID Pesanan",
        "customer": "Pelanggan",
        "date": "Tarikh",
        "amount": "Jumlah",
        "process": "Proses",
        "ship": "Hantar",
        "pending": "Tertunda",
        "processing": "Diproses",
        "shipping": "Penghantaran",
        "delivered": "Dihantar",
        "cancelled": "Dibatalkan",
        "export_orders": "Eksport",
        
        // Customer Reviews
        "search_reviews_placeholder": "Cari ulasan...",
        "review_list": "Senarai Ulasan",
        "all_ratings": "Semua Penilaian",
        "five_stars": "5 Bintang",
        "four_stars": "4 Bintang",
        "three_stars": "3 Bintang",
        "two_stars": "2 Bintang",
        "one_star": "1 Bintang",
        "approved": "Diluluskan",
        "rejected": "Ditolak",
        
        // Staff Management
        "search_staff_placeholder": "Cari kakitangan...",
        "staff_list": "Senarai Kakitangan",
        "staff_id": "ID Kakitangan",
        "name": "Nama",
        "email": "Emel",
        "role": "Peranan",
        "joined_date": "Tarikh Menyertai",
        "add_new_staff": "Tambah Kakitangan Baru",
        "all_roles": "Semua Peranan",
        "manager": "Pengurus",
        "sales": "Jualan",
        "inventory": "Inventori",
        "customer_service": "Khidmat Pelanggan",
        "deactivate": "Nyahaktif",
        
        // Sales Reports
        "generate_report": "Jana Laporan",
        "export_pdf": "Eksport PDF",
        "sales_summary": "Ringkasan Jualan",
        "total_revenue": "Jumlah Pendapatan",
        "growth": "Pertumbuhan",
        "conversion_rate": "Kadar Penukaran",
        "daily": "Harian",
        "weekly": "Mingguan",
        "monthly": "Bulanan",
        "yearly": "Tahunan",
        "sales_chart": "Carta Jualan",
        "top_products": "Produk Terlaris",
        "units_sold": "Unit Terjual",
        "revenue": "Pendapatan",
        "trend": "Trend",
        
        // Settings
        "general_settings": "Tetapan Umum",
        "store_name": "Nama Kedai",
        "store_email": "Emel Kedai",
        "store_phone": "Telefon Kedai",
        "store_address": "Alamat Kedai",
        "default_language": "Bahasa Lalai",
        "timezone": "Zon Masa",
        "save_changes": "Simpan Perubahan",
        
        // Login Page
        "login_page_title": "Log Masuk - Kedai Alat Tulis MAXLIDA",
        "login_tagline": "Kedai alat tulis terkemuka di Malaysia",
        "login_description": "Produk alat tulis berkualiti untuk kerja, sekolah, dan kreativiti",
        "login_placeholder": "Emel/Nama Pengguna/Telefon",
        "password_placeholder": "Kata Laluan",
        "login_button": "LOG MASUK",
        "forgot_password": "Lupa Kata Laluan?",
        "or": "ATAU",
        "facebook": "Facebook",
        "google": "Google",
        "admin_staff_login": "Log Masuk Admin/Kakitangan",
        "new_to_maxlida": "Baru di MAXLIDA?",
        "need_help": "Perlukan bantuan?",
        
        // Sign Up Page
        "signup_page_title": "Daftar - Kedai Alat Tulis MAXLIDA",
        "phone_number_placeholder": "Nombor Telefon",
        "next_button": "SETERUSNYA",
        "terms_agreement": "Dengan mendaftar, anda bersetuju dengan",
        "terms_of_service": "Terma Perkhidmatan",
        "privacy_policy": "Dasar Privasi",
        "have_account": "Sudah mempunyai akaun?",
        
        // Cart Page
        "cart_page_title": "Troli Belanja - Kedai Alat Tulis MAXLIDA",
        "shopping_cart": "Troli Belanja",
        "product": "Produk",
        "unit_price": "Harga Unit",
        "quantity": "Kuantiti",
        "total_price": "Jumlah Harga",
        "actions": "Tindakan",
        "subtotal": "Subjumlah",
        "shipping": "Penghantaran",
        "total": "Jumlah",
        "checkout": "Bayar",
        "cart_note": "Penghantaran percuma untuk pesanan melebihi RM 100",
        "voucher_placeholder": "Masukkan kod baucar",
        "apply": "Guna",
        "voucher_applied": "Baucar Digunakan",
        "cart_empty": "Troli anda kosong",
        "cart_empty_message": "Nampaknya anda belum menambah sebarang item ke troli anda.",
        "continue_shopping": "Teruskan Membeli-belah",
        
        // Checkout Page
        "checkout_page_title": "Pembayaran",
        "checkout": "Pembayaran",
        "shipping": "Penghantaran",
        "payment": "Bayaran",
        "review": "Semakan",
        "shipping_method": "Kaedah Penghantaran",
        "delivery": "Penghantaran",
        "in_store_pickup": "Pengambilan di Kedai",
        "pickup_location": "Lokasi Pengambilan",
        "maxlida_main_store": "Kedai Utama MAXLIDA",
        "operating_hours": "Waktu Operasi",
        "delivery_address": "Alamat Penghantaran",
        "change": "Tukar",
        "products_ordered": "Produk Dipesan",
        "product_care": "Program Perkhidmatan Penjagaan Produk",
        "product_care_desc": "Lindungi pembelian anda dengan perlindungan terhadap kerosakan, kebakaran, banjir, dan kecurian dengan pembaikan kos sifar, klik dan kutip, dan pengembalian percuma dengan penggantian hari yang sama, Pembaikan/Penggantian, dan Perkhidmatan Penghantaran.",
        "voucher_discount": "Baucar / Diskaun",
        "select": "Pilih",
        "payment_method": "Kaedah Pembayaran",
        "online_banking": "Perbankan Dalam Talian",
        "credit_debit_card": "Kad Kredit/Debit",
        "cash_on_delivery": "Bayaran Tunai Semasa Penghantaran",
        "ewallet": "E-Dompet",
        "order_summary": "Ringkasan Pesanan",
        "merchandise_subtotal": "Jumlah Barangan",
        "product_care_program": "Program Penjagaan Produk",
        "shipping_subtotal": "Jumlah Penghantaran",
        "shipping_fee": "Yuran Penghantaran (SST 6%)",
        "total_payment": "Jumlah Pembayaran",
        "order_tax": "Cukai Pesanan (6% SST termasuk, jika berkenaan)",
        "terms_agreement": "Dengan mengklik \"Buat Pesanan\", anda bersetuju dengan Perlindungan Produk Shopee",
        "terms_conditions": "Terma & Syarat",
        "place_order": "Buat Pesanan",
        "product_care": "Program Perkhidmatan Penjagaan Produk",
        "product_care_desc": "Lindungi pembelian anda dengan perlindungan terhadap kerosakan, kebakaran, banjir, dan kecurian dengan kos sifar, pembaikan ambil dan pulang serta penggantian pada hari yang sama, Baiki/Ganti, dan Perkhidmatan Penghantaran.",
        
        // Search
        "search_placeholder": "Cari produk...",
        
        // Category Navigation
        "browse_categories": "Lihat Kategori",
        "notebooks": "Buku",
        "pens_pencils": "Pen & Pensel",
        "art_supplies": "Alat Seni",
        "office_supplies": "Alat Pejabat",
        "school_essentials": "Keperluan Sekolah",
        "books": "Buku",
        "fashion": "Fesyen",
        "journals": "Jurnal",
        "craft_supplies": "Alat Kraf",
        "desk_accessories": "Aksesori Meja",
        "desk": "Meja",
        "electronic": "Elektronik",
        
        // Flash Sale
        "flash_sale": "Jualan Kilat",
        "see_all": "Lihat Semua",
        "ending_in": "TAMAT DALAM",
        "hours": "Jam",
        "minutes": "Minit",
        "seconds": "Saat",
        "sold": "terjual",
        
        // Product Detail Page
        "premium_hardcover_notebook_full": "Buku Nota Kulit Premium, Kertas Bergaris, Saiz A5, Sesuai Untuk Kerja, Mengambil Nota, Perniagaan, Perjalanan, Jurnal Harian, 200 Muka Surat",
        "view_all_reviews": "Lihat Semua",
        "customer_service": "Khidmat Pelanggan",
        "help_center": "Pusat Bantuan",
        "how_to_buy": "Cara Membeli",
        "returns_refunds": "Pemulangan & Bayaran Balik",
        "about_maxlida": "Tentang MAXLIDA",
        "about_us": "Tentang Kami",
        "privacy_policy": "Dasar Privasi",
        "shocking_sale": "Jualan Mengejutkan",
        "payment_methods": "Kaedah Pembayaran",
        "all_rights_reserved": "Hak Cipta Terpelihara",
        "size": "Saiz",
        "a5_black": "A5 Hitam",
        "a5_brown": "A5 Coklat",
        "quantity": "Kuantiti:",
        "add_to_cart": "TAMBAH KE TROLI",
        "shipping_to_malaysia": "Penghantaran ke Malaysia",
        "free_shipping_info": "Penghantaran standard percuma untuk pesanan melebihi RM80.00",
        "delivery_estimate": "Anggaran penghantaran pada 17/07/2025-22/07/2025",
        "cod_policy": "Polisi COD",
        "learn_more": "Ketahui Lebih Lanjut",
        "return_policy": "Polisi Pemulangan",
        "return_policy_link": "Polisi Pemulangan",
        "shipping_security": "Keselamatan Penghantaran",
        "safe_payments": "Pembayaran Selamat",
        "secure_logistics": "Logistik Selamat",
        "customer_service_badge": "Khidmat Pelanggan",
        "description": "Penerangan",
        "product_description_text": "Buku nota jurnal kulit premium ini mempunyai kertas bergaris berkualiti tinggi yang sesuai untuk menulis, mengambil nota, dan menjurnal. Reka bentuk kulit keras memberikan ketahanan manakala penampilan yang elegan menjadikannya sesuai untuk persekitaran profesional.",
        "product_material": "Bahan: Kulit PU premium dengan kertas bebas asid",
        "product_size": "Saiz: A5 (148 x 210 mm)",
        "product_pages": "Muka surat: 200 muka surat (100 helai)",
        "product_paper_weight": "Berat kertas: 100 GSM",
        "product_features": "Ciri-ciri: Jalur penutup elastik, riben penanda, poket dalaman",
        "product_suitable_for": "Sesuai untuk: Nota kerja, jurnal, perancangan, lakaran",
        "customer_reviews": "Ulasan Pelanggan (100+)",
        
        // Product Tags
        "tag_bestseller": "Terlaris",
        "tag_premium": "Premium",
        "tag_handcrafted": "Buatan Tangan",
        "tag_artist_choice": "Pilihan Artis",
        "tag_eco_friendly": "Mesra Alam",
        "tag_tech": "Teknologi",
        "tag_sustainable": "Lestari",
        "tag_energy_efficient": "Jimat Tenaga",
        "tag_value_pack": "Pakej Nilai",
        "tag_limited": "Edisi Terhad",
        
        // FAQ Questions
        "faq_lost_parcel": "[Penghantaran Pesanan] Bagaimana saya melaporkan bungkusan yang hilang atau mencurigakan?",
        "faq_otp": "[Akaun Saya] Mengapa saya tidak menerima kod pengesahan/Kata Laluan Sekali Guna (OTP)?",
        "faq_return_item": "[Pemulangan Bayaran Balik] Bagaimana saya memulangkan barang yang rosak/salah?",
        "faq_add_card": "[Akaun Saya] Bagaimana saya menambah kad kredit saya?",
        "faq_change_phone": "[Akaun Saya] Bagaimana saya menukar nombor telefon bimbit saya?",
        "faq_track_order": "[Pengesanan Pesanan] Bagaimana saya boleh menjejak status pesanan dan bukti penghantaran?",
        
        // Product Detail Page Additional
        "you_may_also_like": "Anda Mungkin Juga Suka",
        "helpful": "Membantu",
        "reviews_count": "(100+ Ulasan)",
        
        // Featured, Popular, New Items
        "featured_items": "Produk Pilihan",
        "popular_items": "Produk Popular",
        "new_arrivals": "Produk Baharu",
        
        // Help Page
        "help_header": "Hai, bagaimana kami boleh bantu?",
        "search_placeholder_help": "Cari...",
        "promo_banner": "PROMOSI ISTIMEWA: Penghantaran percuma untuk semua pesanan melebihi RM50! Gunakan kod FREE50 semasa pembayaran.",
        "categories": "Kategori",
        "track_order": "Jejak Pesanan Saya",
        "returns_refunds": "Pemulangan & Bayaran Balik",
        "shipping_delivery": "Penghantaran & Penghantaran",
        "payment": "Pembayaran",
        "deals_discounts": "Tawaran & Diskaun",
        "account": "Akaun",
        "hot_questions": "Soalan Hangat",
        "other_questions": "Adakah Anda Mempunyai Soalan Lain?",
        "contact_support": "Hubungi pasukan sokongan kami di support@maxlida.com",
        
        // Product Names
        "premium_hardcover_notebook": "Buku Nota Kulit Keras Premium",
        "colorful_gel_pens": "Set 10 Pen Gel Berwarna",
        "wooden_desk_organizer": "Pengatur Meja Kayu",
        "professional_watercolor_set": "Set Cat Air Profesional",
        "bestseller_novel": "Novel Terlaris - Kulit Keras",
        "washi_tape_set": "Set Pita Washi Hiasan (10 keping)",
        "pastel_highlighters": "Set Penyerlah Pastel (10 Warna)",
        "designer_sticky_notes": "Koleksi Nota Lekat Pereka",
        "weekly_planner": "Perancang Mingguan 2025 dengan Pelekat",
        
        // Category Page
        "filter_products": "Tapis Produk",
        "search_filter": "TAPIS CARIAN",
        "all_categories": "Semua Kategori",
        "shipping_option": "Pilihan Penghantaran",
        "same_day_delivery": "Penghantaran Hari Sama",
        "next_day_delivery": "Penghantaran Hari Berikutnya",
        "two_day_delivery": "Penghantaran 2 Hari",
        "self_collection": "Titik Pengambilan Sendiri",
        "brand": "Jenama",
        "payment_option": "Pilihan Pembayaran",
        "installment": "Ansuran",
        "cash_on_delivery": "Bayaran Tunai Semasa Penghantaran",
        "rating": "Penilaian",
        "price_range": "Julat Harga",
        "apply": "GUNA",
        "clear_all": "KOSONGKAN SEMUA",
        "sort_by": "Susun mengikut:",
        "more": "Lagi",
        "popular": "Popular",
        "latest": "Terkini",
        "top_sales": "Jualan Tertinggi",
        "price": "Harga",
        "five_stars": "★★★★★",
        "four_stars_up": "★★★★☆ & Ke Atas",
        "three_stars_up": "★★★☆☆ & Ke Atas",
        "two_stars_up": "★★☆☆☆ & Ke Atas",
        "min_price": "RM MIN",
        "max_price": "RM MAKS",
        "discount_percent": "{percent}% DISKAUN",
        "credit_debit": "Kredit/Debit",
        "premium_leather_journal": "Jurnal Kulit Premium",
        "professional_art_sketchbook": "Buku Lakaran Seni Profesional",
        "recycled_paper_notebook": "Buku Nota Kertas Kitar Semula",
        "dotted_journal": "Jurnal Bertitik untuk Bullet Journaling",
        "pastel_notebook_set": "Set Buku Nota Pastel (3 keping)",
        "smooth_gel_pens": "Set 12 Pen Gel Lancar (0.5mm)",
        "smart_notebook": "Buku Nota Pintar Boleh Guna Semula",
        "desk_organizer_charger": "Pengatur Meja dengan Pengecas Tanpa Wayar",
        "bamboo_desk_set": "Set Aksesori Meja Buluh",
        "led_desk_lamp": "Lampu Meja LED Boleh Laras dengan Port USB"
    }
};

// Default language
let currentLanguage = 'english';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Update active state on language buttons
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// Function to update content based on selected language
function updateContent() {
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        if (translations[currentLanguage][key]) {
            // Special handling for input placeholders
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[currentLanguage][key];
            } 
            // For everything else, update the text content
            else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has a saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage && (savedLanguage === 'english' || savedLanguage === 'malay')) {
        currentLanguage = savedLanguage;
    }
    
    // Set active state on the current language button
    const activeButton = document.querySelector(`.language-option[data-lang="${currentLanguage}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Update the current language display
    const currentLangDisplay = document.querySelector('.current-lang');
    if (currentLangDisplay) {
        currentLangDisplay.textContent = currentLanguage === 'english' ? 'English' : 'Bahasa Melayu';
    }
    
    // Update content with the selected language
    updateContent();
    
    // Add event listeners to language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update the current language display
            const currentLangDisplay = document.querySelector('.current-lang');
            if (currentLangDisplay) {
                currentLangDisplay.textContent = lang === 'english' ? 'English' : 'Bahasa Melayu';
            }
        });
    });
});
