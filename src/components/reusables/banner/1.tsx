import { Stack, Typography, Box, Fade, Zoom } from "@mui/material";
import { useWindow, useImage } from "../../../util/hooks";
import { useMemo } from "react";

const BANNER_SRC = "/static/images/banner.jpg";
const BANNER_SRC_MOBILE = "/static/images/banner_mobile.jpg";

export function Banner1() {
  const isMobile = useWindow();
  const bannerSrc = useMemo(
    () => (isMobile ? BANNER_SRC_MOBILE : BANNER_SRC),
    [isMobile],
  );
  const { src } = useImage(bannerSrc);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "80vh" : "100vh",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
      {/* Blurred fill — 100% height */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: src ? `url('${src}')` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(28px)",
          transform: "scale(1.08)",
        }}
      />

      {/* Sharp banner — 100% width, centered */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? 1.5 : 3,
        }}
      >
        {src && (
          <Box
            component="img"
            src={src}
            alt=""
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
            }}
          />
        )}

        {isMobile && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.42)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        )}

        {/* Text blocks */}
        <Stack
          spacing={isMobile ? 1 : 2}
          sx={{
            position: "absolute",
            top: "50%",
            zIndex: 1400,
            alignItems: "center",
            textAlign: "center",
            width: "max-content",
            maxWidth: isMobile ? "90%" : "55%",
            ...(isMobile
              ? {
                  left: "50%",
                  right: "auto",
                  transform: "translate(-50%, -50%)",
                  px: 2,
                }
              : {
                  right: 0,
                  transform: "translateY(-50%)",
                  pr: 6,
                  pl: 2,
                }),
          }}
        >
          <Zoom in timeout={900} style={{ transitionDelay: "200ms" }}>
            <Typography
              variant="h3"
              sx={{
                bgcolor: "tertiary.main",
                color: "tertiary.contrastText",
                px: isMobile ? 2 : 4,
                py: isMobile ? 1 : 1.5,
                borderRadius: 2,
                fontWeight: 800,
                fontSize: isMobile ? "1.75rem" : "2.75rem",
              }}
            >
              -15%
            </Typography>
          </Zoom>
          <Fade in timeout={1000} style={{ transitionDelay: "500ms" }}>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                fontSize: isMobile ? "2.25rem" : "4rem",
                lineHeight: 1.15,
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
              }}
            >
              на матрасы
            </Typography>
          </Fade>
          <Fade in timeout={1000} style={{ transitionDelay: "850ms" }}>
            <Typography
              variant="h5"
              sx={{
                color: "tertiary.main",
                fontWeight: 600,
                fontSize: isMobile ? "1.85rem" : "3.25rem",
                lineHeight: 1.15,
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
              }}
            >
              до 15 мая
            </Typography>
          </Fade>
        </Stack>
      </Stack>
    </Box>
  );
}
