export type Photo = {
  caption: string
  /** Event name shown above a group of photos within a year */
  event?: string
  /** Image path under /public. Photos without `src` show a placeholder tile. */
  src?: string
}

export type Category = 'festival' | 'awards'

/**
 * To add photos: copy the image into /public/images/gallery and add an entry
 *   { src: '/images/gallery/my-photo.jpg', caption: 'Description, 2025', event: 'Event name' }
 * to the right year. To add a year, add a new key under `years`.
 */
export const GALLERY: Record<Category, { name: string; years: Record<string, Photo[]> }> = {
  "festival": {
    "name": "Festival Performances",
    "years": {
      "2025": [
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-1.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-2.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-3.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-4.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-5.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-6.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-7.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-8.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        },
        {
          "caption": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025",
          "src": "/images/gallery/festival-2025-9.jpg",
          "event": "Shivarathri performance at Sri Rajarajeswari Temple of Canada – February 25th, 2025"
        }
      ],
      "2024": [
        {
          "caption": "Navarathiri program, Chandra Mouleeswarar temple, 2024",
          "src": "/images/gallery/festival-2024-1.jpg",
          "event": "Navarathiri program, Chandra Mouleeswarar temple"
        },
        {
          "caption": "Navarathiri program, Chandra Mouleeswarar temple, 2024",
          "src": "/images/gallery/festival-2024-2.jpg",
          "event": "Navarathiri program, Chandra Mouleeswarar temple"
        },
        {
          "caption": "Navarathiri program, Sri Varasithi Vinayagar temple, 2024",
          "src": "/images/gallery/festival-2024-3.jpg",
          "event": "Navarathiri program, Sri Varasithi Vinayagar temple"
        },
        {
          "caption": "Navarathiri program, Sri Varasithi Vinayagar temple, 2024",
          "src": "/images/gallery/festival-2024-4.jpg",
          "event": "Navarathiri program, Sri Varasithi Vinayagar temple"
        },
        {
          "caption": "Navarathiri program, Sri Varasithi Vinayagar temple, 2024",
          "src": "/images/gallery/festival-2024-5.jpg",
          "event": "Navarathiri program, Sri Varasithi Vinayagar temple"
        }
      ],
      "2023": [
        {
          "caption": "Canada Tamil Academy, Aruvadai, 2023",
          "src": "/images/gallery/festival-2023-1.jpg",
          "event": "Canada Tamil Academy, Aruvadai"
        }
      ]
    }
  },
  "awards": {
    "name": "Award Ceremonies",
    "years": {
      "2026": [
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-1.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-2.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-3.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-4.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-5.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-6.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-7.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-8.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-9.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-10.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2026",
          "src": "/images/gallery/awards-2026-11.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        }
      ],
      "2025": [
        {
          "caption": "Award ceremony, 2025"
        },
        {
          "caption": "Award ceremony, 2025"
        },
        {
          "caption": "Award ceremony, 2025"
        }
      ],
      "2024": [
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-1.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-2.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-3.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-4.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-5.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-6.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-7.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-8.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-9.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-10.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-11.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2024",
          "src": "/images/gallery/awards-2024-12.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        }
      ],
      "2020": [
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2020",
          "src": "/images/gallery/awards-2020-1.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        },
        {
          "caption": "Tamil Isai Kalamandram grade level exam award ceremony, 2020",
          "src": "/images/gallery/awards-2020-2.jpg",
          "event": "Tamil Isai Kalamandram grade level exam award ceremony"
        }
      ]
    }
  }
}
