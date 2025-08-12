import { Button } from '@/core/components/forms/button/button'
import { Input } from '@/core/components/forms/input/input'
import Iconify from '@/core/components/iconify/iconify'
import { Icons } from '@/global/icons'
import { Slider } from '@heroui/slider'
import Hls from 'hls.js'
import { useEffect, useRef, useState } from 'react'

export default function TestStream() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [url, setUrl] = useState<string>('')
  const [inputUrl, setInputUrl] = useState<string>('')
  const [volume, setVolume] = useState<number>(1)
  const [isLive, setIsLive] = useState(true)
  const [progress, setProgress] = useState(0)
  const isLiveRef = useRef(isLive)

  useEffect(() => {
    isLiveRef.current = isLive
  }, [isLive])

  useEffect(() => {
    if (!videoRef.current) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(url)
      hls.attachMedia(videoRef.current)

      hls.on(Hls.Events.ERROR, (_event, data) => {
        console.error('HLS error:', data)
      })

      return () => {
        hls.destroy()
      }
    }

    if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = url
      return
    }

    console.error('HLS is not supported in this browser')
  }, [url])

  useEffect(() => {
    const interval = setInterval(() => {
      const video = videoRef.current
      if (video && video.seekable.length > 0) {
        const start = video.seekable.start(0)
        const end = video.seekable.end(video.seekable.length - 1)
        const currentTime = video.currentTime

        const progressPercent = ((currentTime - start) / (end - start)) * 100

        setIsLive(end - currentTime < 1)

        // Siempre actualizar progress, pero ignorar el cambio en el slider si isLive
        setProgress(progressPercent)
      }
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume
    }
  }, [volume])

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-full flex justify-center items-center gap-2">
        <Input
          className="w-full max-w-3xl"
          type="text"
          placeholder="URL .m3u8"
          value={inputUrl}
          onChange={e => setInputUrl(e.target.value)}
        />
        <Button onPress={() => setUrl(inputUrl)}>Cargar</Button>
      </div>

      <div className="w-full max-w-4xl rounded-xl overflow-hidden relative group">
        <video
          className="w-full bg-black"
          ref={videoRef}
          controls={false}
          style={{
            aspectRatio: '16/9',
          }}
        >
          <track kind="captions" srcLang="en" label="English captions" />
        </video>
        <Button
          className="!bg-transparent hover:!bg-white/10 absolute top-2 right-2 z-10"
          onPress={() => {
            const video = videoRef.current
            if (video && video.seekable.length > 0) {
              const end = video.seekable.end(video.seekable.length - 1)
              video.currentTime = end
              setIsLive(true)
              setProgress(100)
            }
          }}
          disabled={isLive}
          startContent={<Iconify className={isLive ? 'text-red-500' : 'text-white'} icon={Icons.POINT} />}
        >
          {isLive ? 'Live' : 'Go Live'}
        </Button>
        <div className="controls-overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end">
          <Slider
            className="w-full max-w-4xl"
            classNames={{
              track: 'rounded-none',
            }}
            maxValue={100}
            step={0.1}
            value={[progress]}
            onChange={value => {
              if (!Array.isArray(value)) return
              if (isLive) return

              const video = videoRef.current
              if (video && video.seekable.length > 0) {
                const start = video.seekable.start(0)
                const end = video.seekable.end(video.seekable.length - 1)
                const newTime = start + (value[0] / 100) * (end - start)
                video.currentTime = newTime
                setProgress(value[0])
              }
            }}
          />
          <div className="relative flex gap-2 w-full items-center justify-center">
            <Slider
              className="absolute bottom-2 left-4 w-[100px] text-white/80"
              hideThumb={true}
              value={[volume * 100]}
              maxValue={100}
              step={1}
              onChange={value => {
                if (Array.isArray(value)) setVolume(value[0] / 100)
              }}
              startContent={<Iconify icon={Icons.VOLUME} />}
            />
            <Button
              className="!bg-transparent hover:!bg-white/10 text-white/80"
              onPress={() => {
                if (videoRef.current) videoRef.current.currentTime -= 10
              }}
              isIconOnly
              startContent={<Iconify icon={Icons.REWIND_10} />}
            />
            <Button
              className="!bg-transparent hover:!bg-white/10 text-white/80"
              onPress={() => {
                const video = videoRef.current
                if (video) {
                  if (video.paused) {
                    video.play()
                  } else {
                    video.pause()
                  }
                }
              }}
              isIconOnly
              startContent={<Iconify icon={videoRef.current?.paused ? Icons.PLAY : Icons.PAUSE} />}
            />
            <Button
              className="!bg-transparent hover:!bg-white/10 text-white/80"
              onPress={() => {
                if (videoRef.current) videoRef.current.currentTime += 10
              }}
              isIconOnly
              startContent={<Iconify icon={Icons.FORWARD_10} />}
            />
            <Button
              className="!bg-transparent hover:!bg-white/10 absolute bottom-0 right-4 z-10 text-white/80"
              onPress={() => {
                const video = videoRef.current
                if (video) {
                  if (video.requestFullscreen) {
                    video.requestFullscreen()
                  } else if ((video as any).webkitRequestFullscreen) {
                    ;(video as any).webkitRequestFullscreen()
                  } else if ((video as any).mozRequestFullScreen) {
                    ;(video as any).mozRequestFullScreen()
                  } else if ((video as any).msRequestFullscreen) {
                    ;(video as any).msRequestFullscreen()
                  }
                }
              }}
              isIconOnly
              startContent={<Iconify icon={Icons.FULL_SCREEN} />}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
