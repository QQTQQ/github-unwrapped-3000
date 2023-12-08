import type { SVGProps } from "react";
import { AbsoluteFill } from "remotion";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <AbsoluteFill>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 500 500"
        {...props}
      >
        <defs>
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABPCAYAAABF9vO4AAAACXBIWXMAAAsSAAALEgHS3X78AAAFdUlEQVR4nO3Zy27bRhQG4P+cMyTN2IriFnRT1L3AMLrQVi+gl8jz2HodK+8QLZqltloEgdACDopabRTHF4rkzDldUHYdd1egVFrMBwwg8DYXneFlDhBFURRFURRFURRFURRFURRFURRFURRF0eeDtt2Ah8zu2mOP9rSbif62Y2t42w0wM7or4/EpAaeEdqQelFMaj0/p4bHbbfV2kZnR6ekpmxmfnZ2J2Zm8evXKmX1a2m1n0h5jvDnnbmC30/ht1WtmAMY0mQyoKArq9d7QcDgEkBPe/vJpu46/N6C02WyGq6sfbblc2osXcwNOjIiAv8/tf53rukLcDxoIGNDR0YrzHDQYfEvn5wsWyYl7KX21Ofg3APrrwkIobTj8VufzpfV6KwMGCgBmZtSOXqeD13XE3UcaMKDZ7Ij7/Qve2bnmJOmzfNhlSUomdkTs2lBSb6beQpNreHajTXOp6/WeXl4e6HC4UGA7kddpxJkZxuMxDQZtpPX7F3y884yXWS7uyovsstyuM2GqmbT9U82CqWb6ZJdDuOHAvSIcIsNbXGA2W2GxGOh8Pr6LvM760mnE3d3Qp9MpHxwc8NOnl5JllSQ3cJLBcQVXeThiz5Q/aQeuvDVTp5mD1ww+VPDNLnxVZeHjx364uLjQ0WikAIyIOos46aoiAEREtFwu6fnz59zvr+S7rC/NbZmsfZkYI4VSyqmloki9WmohJImZUAoOatzAU93UyEKCg6xvN/Q7QujZ69ev8fLlS0yn084609l7nJnhBEBRFJTnC8r+uOb3V+9EkiAuYee8JJyENJhlnrAjaIsn7ASzjJOQOi+JS9hJEuT91TvJ/rjmPF9QURR0sqmjK51N1fv3rumU3x6W0rsVlz1NExfqtAYyhzTziWVsIWVOnA+NAICTJKg2Xklq11DlUVcpUHlJ6+pj3Vw9Cf74PA/oeLp2+uUwmUxo1ntDzuXELiW+rXhdm7Ck0ggcq09YOSHTlI1TNk7JNGXlhNUnjcCxpLKuTfi2YnYpOZfTrPeGJpNJp/frLXxyDfEDAJKkfeXYYyIOTN6EghOvcEHhHIs4FgkK5xWOghPyJsSB23MckST0w+aaXevq4UBEREVR0P7+PunlO3F5j13Pi95ywkpJkpIz84mDOGMSUxMzIxCZM6iRD0nC3moEazjIHnyoXXi//M1uZF9Xq5V1+YDoKuLs5OTk/t5z+HXR/r4CLA+G1KyuAZizBmaAmQirCCtg7TZz7TGpmeXBcPXoWgA2dfz/7nGtGX4GYKExU2+4VjMVNUfBxAfH8MLwXkPwGoIwvGN4Ex/MUTAVbc/xZqGxnzfX7Fp8qv5D3UbceIwpgLq+Nm1qU1+q7UhQZ15ZG8e+VqIqeF8x3Jrh1sH7Sokqx75W1kadeduRoL5UbWqr62ubbq7dpc4GjogwBrBcLq0sj6z6ck+/6H0TQiPBN+q9C402UgtR5QzrgLY4w1qIKm2k9i40vlEfGglf9L4J1Zd7WpZHtlwubbypo7P+dFYT/l/fqp0/HMbj8SbqfrL1+oMWVRaaXXhf+ia4rK4hVUNUNVXdFqKqhlTBZbUvfdPswhdVFtbrD1qWP7XR1vE0BeJ63D/vSFcVPazzrxXgCc1mK87zfRoM9uj8/LpdAeZHK8BaWwilHR7u6Xx+bWW5suFwX4EXhnaKAh2vAG9j6dyIiMzMgDkWi4EWRUFl+YaGw6E+zjl8BQDHR49yDrDhcL61QQO2lx7cdPjE5vO5jUYjXSz2FVjodHqhOM7DwzKdXiiw0MViX0ejkc7n203UfBYe5krbtF+bLvy0nN6nBD+XvOrWG/DQfymTH0VRFEVRFEVRFEVRFEVRFEVRFEVRFEXR5+RPiE7qzSWWFHsAAAAASUVORK5CYII="
            id="image"
            width={78}
            height={79}
          />
          <image
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAAACXBIWXMAAAsSAAALEgHS3X78AAAEIklEQVR4nO3ZwW4bNxAG4H+G3N2sbMlOgDgx4AJBkFN61ANEL6HnafwYfQY9RNR7dKxPQVCgARxbaGNb1u5SJGd6kBM4aM5aF53vQmC5oriDWZFDAcYYY4wxxhhjjDHGGGOMMcYYY4wx5qGgvidwnwIE1X93EIGAH3T0g/ueAACoKqkqQd8SAJrNZgzMeNuCoG/p2z0PQK+TUP2WQATMCHhKWAzprP5Ir/EzzvA7XrcvFeOVAksFpoq7hCTqL/N6C9q3gM1mjOlTwtkRY3DJ59UtM5f0DM9xgc8Q2ehx2Bc0R4LXl4LZUjGdSp+B6zFoSpjNePHyC48PfuKLxvlikN0TX/ONr5ioIdWBjlKQv1MrsXH52SCnxfWfMv74WDCdChH9f4J299tEwJzxoXUYOn/VloVPruACnnx2ICaoqCaXJSIln+NhvYlY5YRXdQYmAkD7CFyPQZsxzuDw+KW/Cqtyo7kqVCsuuGBHnmJmLZxI1iRRYiQKJblwWA03+PIx4TUy0E+2+V1/oQKE01PCmzf0xwtwWl/6faAoB3ul7+IjJl+lNpdExJogvvIbQQxaFdo1a/mQWvGDp/JiDsFvp6TAzrcjO8+0uwWAFouFGz/b+KsUqtSGuiiKgbAMHHFNjsss6hxT1iybrNKycBNjbHxdtYe+CouLMo3H4wyQ7npB6GGftn2+8RiAK+m2Cbw3LJhZXeVKn1VKSVrRXZtVysqVnlnd3rDg2yYwXEnj8ffj7VIvm9vZbEYAcLH8i0YjoO2YQEwxZfZEBE9ExAxP5IkopswgprZjGo22n7s/zq718Hp+XTkX7vz8vBjEw6ogqlPMe8Ky50gGGVoVxBxVxIFCVm5YeO0Lt46qbVNchePj4wiMM3pYQXvINAJwCmClObcqqRNNXVbXJUkahSg4+G6TcnDwnRAFSRrVdUlTlyV1knOrwEq34+w+2Xrbcsznczc5aR0O6mK1ydVG6ZFXPHKqFWUuImcuxIk6iZkoJEJXknbD0gVct3H+qc6TyST3seXorWBfLpeKV0eCUOVhvR9LxyG16JK4Jgut2ZW3WWidxDWpRVc6DsN6PyJUGa+OZLlc9lZ79hQ0wnR6pvP5SnFzkM/DMsV1velEO1+Xjfdu7TWsvXdrX5dNJ9rFdb05D8uEm4M8n690Oj3TvqrAfmtPgDCfM46O+NPo2lU3wbnnNfNNy8SeVJLKqJb8uZUwqvLJzUHG5aVg0l8JBfT4et49sGIykfnlpZyclOm6bOOTm3Zz6KvQFFfh0FfhyU27uS7beHJSpvkDCNiDsD1cfMuqyqrqVN95ff9rofq+2Lbv/Pa68t19vR9E9j4B4LvDSACnP5jTL3ed/R4+fvUggnbf9n+Cexdo9wW5McYYY4wxxhhjjDHGGGOMMcYYY4z57/gHAiBf99O9E0AAAAAASUVORK5CYII="
            id="image-2"
            width={77}
            height={77}
          />
          <image
            xlinkHref="data:image/png;base64,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"
            id="image-3"
            width={79}
            height={79}
          />
          <style>
            {
              ".cls-1{fill:#f9ebc3}.cls-1,.cls-2,.cls-3,.cls-6,.cls-7,.cls-8{stroke-width:0}.cls-2{fill:#f9ecc3}.cls-3{fill:#d7b483}.cls-6{fill:#f0dfbe}.cls-7{fill:#f0ddbc}.cls-8{fill:#f5e3b8}"
            }
          </style>
        </defs>
        <image
          xlinkHref="data:image/png;base64,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"
          width={79}
          height={80}
          transform="translate(87 16.5)"
        />
        <image
          xlinkHref="data:image/png;base64,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"
          width={79}
          height={79}
          transform="translate(87 271.5)"
        />
        <path
          d="M132.8 77.25c0 .42-.31.74-.7.75-.41 0-.71-.33-.72-.78 0-.45.26-.73.69-.72.45 0 .73.29.73.75Z"
          style={{
            fill: "#e6c89e",
            strokeWidth: 0,
          }}
        />
        <path
          d="M403.77 120.42c-.75.02-1.36-.52-1.36-1.22 0-.6.7-1.36 1.28-1.39.61-.03 1.26.65 1.28 1.34.02.65-.55 1.25-1.2 1.27ZM409.77 400.42c-.75.02-1.36-.52-1.36-1.22 0-.6.7-1.36 1.28-1.39.61-.03 1.26.65 1.28 1.34.02.65-.55 1.25-1.2 1.27ZM460.46 160.42c-.58.01-1.04-.4-1.05-.93 0-.46.54-1.05.98-1.07.47-.02.97.5.98 1.03.01.5-.42.96-.92.97Z"
          className="cls-8"
        />
        <path
          d="M357.38 143.14c-.69 0-1.39-.62-1.41-1.28-.02-.68.76-1.53 1.4-1.51.58.01 1.4.89 1.39 1.48 0 .64-.69 1.3-1.38 1.31Z"
          className="cls-6"
        />
        <path
          d="M333.27 218.49c-1.13.33-1.43-.42-1.44-1.25-.02-.9.6-1.32 1.48-1.3.89.02 1.45.5 1.39 1.39-.06.78-.36 1.5-1.42 1.16ZM157.27 242.49c-1.13.33-1.43-.42-1.44-1.25-.02-.9.6-1.32 1.48-1.3.89.02 1.45.5 1.39 1.39-.06.78-.36 1.5-1.42 1.16ZM56.27 375.49c-1.13.33-1.43-.42-1.44-1.25-.02-.9.6-1.32 1.48-1.3.89.02 1.45.5 1.39 1.39-.06.78-.36 1.5-1.42 1.16Z"
          className="cls-3"
        />
        <path
          d="M177.54 328.83c-.04.42-.25.71-.73.72-.48.01-.7-.31-.81-.7-.07-.27.51-.87.79-.82.4.08.7.32.74.8ZM30.54 303.83c-.04.42-.25.71-.73.72-.48.01-.7-.31-.81-.7-.07-.27.51-.87.79-.82.4.08.7.32.74.8Z"
          className="cls-7"
        />
        <path
          d="M127.43 56.55c-.06.6-.37 1.06-.99 1.15-.57.08-.83-.32-.83-.85 0-.64.37-1.08.98-1.18.57-.09.79.33.84.87ZM51.43 35.55c-.06.6-.37 1.06-.99 1.15-.57.08-.83-.32-.83-.85 0-.64.37-1.08.98-1.18.57-.09.79.33.84.87Z"
          className="cls-2"
        />
        <image
          xlinkHref="data:image/png;base64,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"
          width={79}
          height={79}
          transform="translate(413 34.5)"
        />
        <path
          d="M452.7 72.87c.49.14.86.45.86.94 0 .64-.42 1.06-1.04 1.08-.55.02-.77-.43-.73-.95.05-.55.37-.91.91-1.07Z"
          className="cls-1"
        />
        <use xlinkHref="#image" transform="translate(394 293.5)" />
        <path
          d="M433.21 331.72c.49.14.86.45.86.94 0 .64-.42 1.06-1.04 1.08-.55.02-.77-.43-.73-.95.05-.55.37-.91.91-1.07Z"
          className="cls-1"
        />
        <use xlinkHref="#image-3" transform="translate(336 237.5)" />
        <path
          d="M375.63 275.92c.49.14.86.45.86.94 0 .64-.42 1.06-1.04 1.08-.55.02-.77-.43-.73-.95.05-.55.37-.91.91-1.07Z"
          className="cls-1"
        />
        <use xlinkHref="#image-2" transform="translate(90 344.5)" />
        <path
          d="M128.59 381.97c.37.11.64.34.65.71 0 .48-.32.79-.78.81-.41.01-.58-.33-.55-.71.03-.42.28-.69.68-.8Z"
          className="cls-1"
        />
        <use xlinkHref="#image-2" transform="translate(391 372.5)" />
        <path
          d="M429.59 409.97c.37.11.64.34.65.71 0 .48-.32.79-.78.81-.41.01-.58-.33-.55-.71.03-.42.28-.69.68-.8Z"
          className="cls-1"
        />
        <use xlinkHref="#image-3" transform="translate(390 186.5)" />
        <path
          d="M429.63 224.92c.49.14.86.45.86.94 0 .64-.42 1.06-1.04 1.08-.55.02-.77-.43-.73-.95.05-.55.37-.91.91-1.07Z"
          className="cls-1"
        />
        <use xlinkHref="#image-3" transform="translate(-24 184.5)" />
        <path
          d="M15.63 222.92c.49.14.86.45.86.94 0 .64-.42 1.06-1.04 1.08-.55.02-.77-.43-.73-.95.05-.55.37-.91.91-1.07Z"
          className="cls-1"
        />
        <use xlinkHref="#image" transform="translate(76 109.5)" />
        <path
          d="M115.1 147.88c.49.14.86.45.86.94 0 .64-.42 1.06-1.04 1.08-.55.02-.77-.43-.73-.95.05-.55.37-.91.91-1.07Z"
          className="cls-6"
        />
        <path
          d="M127.35 310.84c-.15.48-.46.85-.97.85s-.67-.46-.68-.87c0-.44.35-.6.74-.61.45-.02.81.11.91.63Z"
          style={{
            fill: "#faedc6",
            strokeWidth: 0,
          }}
        />
      </svg>
    </AbsoluteFill>
  );
};

export default SvgComponent;
