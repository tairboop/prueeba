import { CompactButton } from '@/components/compact-btn.tsx/compact-button'
import ModalBox from '@/components/modal-box/modal-box'
import { Button } from '@/core/components/forms/button/button'
import { Input } from '@/core/components/forms/input/input'
import { Select } from '@/core/components/forms/select/select'
import Iconify from '@/core/components/iconify/iconify'
import TitleSection from '@/core/components/page/title-section'
import { Table } from '@/core/components/table/table'
import { Icons } from '@/global/icons'
import {
  Chip,
  Button as HeroButton,
  Pagination,
  SelectItem,
  Spacer,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react'
import { parseAbsoluteToLocal } from '@internationalized/date'
import { useMemo, useState } from 'react'

const columns = ['Nro', 'Title', 'Status', 'Dates', 'Image', 'Options']

export const items = [
  {
    id: 1,
    title: 'Cámara Vintage Canon AE-1',
    description: 'Una cámara clásica de 35mm en excelente estado. Perfecta para fotografía análoga.',
    createdAt: '2025-06-28T09:15:00.000Z',
    updatedAt: '2025-06-28T09:15:00.000Z',
    imageUri: 'https://global.canon/ja/c-museum/common/img/history/history_06.png',
    public: true,
    status: true,
  },
  {
    id: 2,
    title: 'Mesa de roble artesanal',
    description: 'Mesa hecha a mano con madera de roble maciza. Ideal para comedor o estudio.',
    createdAt: '2025-06-27T17:42:00.000Z',
    updatedAt: '2025-06-27T18:00:00.000Z',
    imageUri: 'https://thewoodtailor.es/16155-product_default/mesa-de-centro-roble-medio.jpg',
    public: true,
    status: false,
  },
  {
    id: 3,
    title: 'MacBook Pro 14” 2023',
    description: 'Portátil en excelente estado, procesador M2 Pro, 16GB RAM, 512GB SSD.',
    createdAt: '2025-06-26T14:20:00.000Z',
    updatedAt: '2025-06-29T10:00:00.000Z',
    imageUri: 'https://www.playforce.com.sg/cdn/shop/files/11_149f2e1a-4b1d-49f5-86fc-c19efe2cb9c4_1024x1024.png?v=1689668904',
    public: false,
  },
  {
    id: 4,
    title: 'Cuadro al óleo: Paisaje de montaña',
    description: 'Obra original firmada por artista local. Tonos fríos y vibrantes.',
    createdAt: '2025-06-25T19:30:00.000Z',
    updatedAt: '2025-06-25T20:00:00.000Z',
    imageUri: 'https://i.ytimg.com/vi/AAXWMjIScuA/maxresdefault.jpg',
    public: true,
    status: true,
  },
  {
    id: 5,
    title: 'Bicicleta de ruta Giant TCR',
    description: 'Ligera, rápida y lista para recorrer largas distancias. Incluye portabotellas.',
    createdAt: '2025-06-24T08:45:00.000Z',
    updatedAt: '2025-06-24T09:00:00.000Z',
    imageUri:
      'https://www.cyclewear.com.co/cdn/shop/files/1096035105-negra-0-4227bc74-4416-4440-bbdb-b2aa9fadbe47_fe1cf6e7-7ae9-4c41-ba03-4ab0d52ade36.jpg?v=1732591421',
    public: true,
    status: false,
  },
  {
    id: 6,
    title: 'Pintura al óleo: Paisaje de la playa',
    description: 'Obra original firmada por artista local. Tonos cálidos y relajantes.',
    createdAt: '2025-06-23T19:30:00.000Z',
    updatedAt: '2025-06-23T20:00:00.000Z',
    imageUri: 'https://i.ytimg.com/vi/AAXWMjIScuA/maxresdefault.jpg',
    public: true,
    status: true,
  },
  {
    id: 7,
    title: 'Bicicleta de montaña Trek',
    description: 'Ligera, ágil y lista para recorrer largas distancias en el camino.',
    createdAt: '2025-06-22T08:45:00.000Z',
    updatedAt: '2025-06-22T09:00:00.000Z',
    imageUri: 'https://www.trekbikes.com/content/dam/trek-bicycle/global/master/header/hero-2023-Fuel-EX-29-1.jpg',
    public: true,
    status: false,
  },
  {
    id: 8,
    title: 'Cuadro al óleo: Paisaje de la ciudad',
    description: 'Obra original firmada por artista local. Tonos urbanos y dinámicos.',
    createdAt: '2025-06-21T19:30:00.000Z',
    updatedAt: '2025-06-21T20:00:00.000Z',
    imageUri: 'https://i.ytimg.com/vi/AAXWMjIScuA/maxresdefault.jpg',
    public: true,
    status: true,
  },
  {
    id: 9,
    title: 'Bicicleta de carretera Pinarello',
    description: 'Ligera, rápida y lista para recorrer largas distancias. Incluye componentes de alta calidad.',
    createdAt: '2025-06-20T08:45:00.000Z',
    updatedAt: '2025-06-20T09:00:00.000Z',
    imageUri: 'https://www.pinarello.com/it_it/wp-content/uploads/sites/5/2022/07/2022-Pinarello-Bolide-TRI-1.jpg',
    public: true,
    status: false,
  },
  {
    id: 10,
    title: 'Pintura al óleo: Paisaje de la montaña',
    description: 'Obra original firmada por artista local. Tonos fríos y vibrantes.',
    createdAt: '2025-06-19T19:30:00.000Z',
    updatedAt: '2025-06-19T20:00:00.000Z',
    imageUri: 'https://i.ytimg.com/vi/AAXWMjIScuA/maxresdefault.jpg',
    public: true,
    status: true,
  },
  {
    id: 11,
    title: 'Bicicleta de montaña Specialized',
    description: 'Ligera, ágil y lista para recorrer largas distancias en el camino.',
    createdAt: '2025-06-18T08:45:00.000Z',
    updatedAt: '2025-06-18T09:00:00.000Z',
    imageUri: 'https://images.specialized.com/medias/sys_master/root/h0f/hf6/8814294484434/S-Works-Epic-Gravel-Red-Black-Hyper-1.jpg',
    public: true,
    status: false,
  },
  {
    id: 12,
    title: 'Cuadro al óleo: Paisaje de la noche',
    description: 'Obra original firmada por artista local. Tonos oscuros y misteriosos.',
    createdAt: '2025-06-17T19:30:00.000Z',
    updatedAt: '2025-06-17T20:00:00.000Z',
    imageUri: 'https://i.ytimg.com/vi/AAXWMjIScuA/maxresdefault.jpg',
    public: true,
    status: true,
  },
  {
    id: 13,
    title: 'Bicicleta de carretera Giant',
    description: 'Ligera, rápida y lista para recorrer largas distancias. Incluye componentes de alta calidad.',
    createdAt: '2025-06-16T08:45:00.000Z',
    updatedAt: '2025-06-16T09:00:00.000Z',
    imageUri: 'https://www.giant-bicycles.com/global/assets/products/2023/giant-tcr-advanced-disc-1_1080x1080.jpg',
    public: true,
    status: false,
  },
  {
    id: 14,
    title: 'Pintura al óleo: Paisaje de la playa',
    description: 'Obra original firmada por artista local. Tonos cálidos y relajantes.',
    createdAt: '2025-06-15T19:30:00.000Z',
    updatedAt: '2025-06-15T20:00:00.000Z',
    imageUri: 'https://i.ytimg.com/vi/AAXWMjIScuA/maxresdefault.jpg',
    public: true,
    status: true,
  },
  {
    id: 15,
    title: 'Bicicleta de montaña Trek',
    description: 'Ligera, ágil y lista para recorrer largas distancias en el camino.',
    createdAt: '2025-06-14T08:45:00.000Z',
    updatedAt: '2025-06-14T09:00:00.000Z',
    imageUri: 'https://www.trekbikes.com/content/dam/trek-bicycle/global/master/header/hero-2023-Fuel-EX-29-1.jpg',
    public: true,
    status: false,
  },
]
export default function AdsPage() {
  const formatDate = (dateString: string) => {
    const date = parseAbsoluteToLocal(dateString)
    return `${String(date.day).padStart(2, '0')}/${String(date.month).padStart(2, '0')}/${date.year}`
  }

  const [page, setPage] = useState(1)
  const rowsPerPage = 12

  const pages = Math.ceil(items.length / rowsPerPage)

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return items.slice(start, end)
  }, [page])

  const title = 'Ads'
  const description = 'In this section you can create edit and delete ads'

  return (
    <TitleSection title={title} description={description} icon={Icons.ADS}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">List of Ads</h3>
        <CompactButton color="primary" variant="flat" startContent={<Iconify icon={Icons.ADD} />}>
          Add new item
        </CompactButton>
      </div>
      <Spacer y={4} />
      <div className="flex flex-row items-center justify-between gap-2">
        <Input
          className="w-full max-w-lg"
          type="text"
          placeholder="Search..."
          variant="flat"
          startContent={<Iconify icon={Icons.SEARCH} />}
        />
        <ModalBox>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap justify-center">
            <Select className="w-full sm:w-[200px]" placeholder="Filter by" startContent={<Iconify icon={Icons.FILTER} />}>
              <SelectItem
                classNames={{
                  title: 'text-xs',
                }}
                key={'title'}
              >
                Title
              </SelectItem>
              <SelectItem
                classNames={{
                  title: 'text-xs',
                }}
                key={'datesCtr'}
              >
                Date Create
              </SelectItem>
              <SelectItem
                classNames={{
                  title: 'text-xs',
                }}
                key={'datesUpdat'}
              >
                Date Update
              </SelectItem>
            </Select>
            <Select variant="flat" className="w-full sm:w-[200px]" placeholder="Sort by" startContent={<Iconify icon={Icons.SORT} />}>
              <SelectItem
                classNames={{
                  title: 'text-xs',
                }}
                key={'ASC'}
                startContent={<Iconify icon={Icons.SORT_ASCENDING} />}
              >
                Ascending
              </SelectItem>
              <SelectItem
                classNames={{
                  title: 'text-xs',
                }}
                key={'DESC'}
                startContent={<Iconify icon={Icons.SORT_DESCENDING} />}
              >
                Descending
              </SelectItem>
            </Select>
            <Button isIconOnly>
              <Iconify icon={Icons.REFRESH} />
            </Button>
            <Button isIconOnly>
              <Iconify icon={Icons.EXPORT} />
            </Button>
          </div>
        </ModalBox>
      </div>
      <Spacer y={4} />
      <Table
        removeWrapper
        className="overflow-x-auto rounded-md"
        classNames={{
          td: 'min-w-[200px] first:min-w-fit last:min-w-fit',
        }}
      >
        <TableHeader>
          {columns.map((column, index) => (
            <TableColumn key={index} align={columns[index] === 'Options' ? 'end' : 'start'}>
              {column}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {paginatedItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Chip classNames={{ content: 'flex min-w-[90px]' }} variant="flat" color={item.status ? 'success' : 'warning'}>
                  <Iconify icon={Icons.POINT} />
                  {item.status ? 'Active' : 'Inactive'}
                </Chip>
              </TableCell>
              <TableCell>
                <div>
                  <p className="text-xs">Created: {formatDate(item.createdAt)}</p>
                  <p className="text-xs">Updated: {formatDate(item.updatedAt)}</p>
                </div>
              </TableCell>
              <TableCell>
                <HeroButton variant="light" size="sm" startContent={<Iconify color="zinc" icon={Icons.GALLERY} />}>
                  Show image
                </HeroButton>
              </TableCell>
              <TableCell className="flex justify-end gap-1">
                <HeroButton variant="light" size="sm" startContent={<Iconify icon={Icons.EDIT} color="cyan" />} isIconOnly />
                <HeroButton
                  variant="light"
                  size="sm"
                  startContent={<Iconify icon={item.status ? Icons.ENABLE : Icons.DISABLE} color={item.status ? 'success' : 'warning'} />}
                  isIconOnly
                />
                <HeroButton variant="light" size="sm" isIconOnly startContent={<Iconify icon={Icons.DELETE} color="danger" />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Spacer y={4} />
      <div className="flex w-full justify-center md:justify-start">
        <Pagination isCompact showControls color="primary" page={page} total={pages} onChange={page => setPage(page)} />
      </div>
    </TitleSection>
  )
}
