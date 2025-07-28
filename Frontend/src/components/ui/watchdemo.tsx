import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function WatchDemo() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const videoPath = location.state?.videoPath

  useEffect(() => {
    if (!videoPath) {
      navigate("/") // fallback redirect
    } else {
      setOpen(true)
    }
  }, [videoPath, navigate])

  if (!videoPath) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black">
        <div className="aspect-video w-full">
          <video className="w-full h-full" src={videoPath} controls autoPlay muted>
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WatchDemo