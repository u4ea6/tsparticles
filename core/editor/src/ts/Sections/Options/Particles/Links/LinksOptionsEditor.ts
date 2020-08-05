import type { Container } from "tsparticles/dist/Core/Container";
import { ColorUtils, EditorGroup, IRgb, IHsl, EditorNumberInput } from "object-gui";
import type { ILinks } from "tsparticles/dist/Options/Interfaces/Particles/Links/ILinks";

export class LinksOptionsEditor {
    public readonly group: EditorGroup;
    private readonly particles: Container;

    constructor(private readonly parent: EditorGroup, private readonly options: ILinks) {
        this.group = parent.addGroup("links", "Links");
        this.particles = this.group.data as Container;

        this.addShadow();
        this.addTriangles();
        this.addLinks();
    }

    private addShadow(): void {
        const particles = this.particles;
        const group = this.group.addGroup("shadow", "Shadow");
        const options = this.options.shadow;

        let shadowColorStringValue = "";

        if (options.color !== undefined) {
            if (typeof options.color === "string") {
                shadowColorStringValue = options.color;
            } else if (typeof options.color.value === "string") {
                shadowColorStringValue = options.color.value;
            } else {
                let rgb = options.color.value as IRgb;
                const hsl = options.color.value as IHsl;

                if (hsl.h !== undefined) {
                    rgb = ColorUtils.hslToRgb(hsl);
                }

                shadowColorStringValue = `${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`;
            }
        }

        group.addProperty(
            "blur",
            "Blur",
            options.blur,
            typeof options.blur,
            async (value: string | number | boolean) => {
                if (typeof value === "number") {
                    options.blur = value;

                    await particles.refresh();
                }
            }
        );

        group.addProperty(
            "color",
            "Color",
            shadowColorStringValue,
            "color",
            async (value: string | number | boolean) => {
                if (typeof value === "string") {
                    if (typeof options.color === "string") {
                        options.color = value;
                    } else {
                        if (options.color === undefined) {
                            options.color = {
                                value: value,
                            };
                        } else {
                            options.color.value = value;
                        }
                    }

                    await particles.refresh();
                }
            }
        );

        group.addProperty(
            "enable",
            "Enable",
            options.enable,
            typeof options.enable,
            (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.enable = value;

                    particles.refresh();
                }
            }
        );
    }

    private addTriangles(): void {
        const particles = this.particles;
        const group = this.group.addGroup("triangles", "Triangles");
        const options = this.options.triangles;

        let trianglesColorStringValue = "";

        if (options.color !== undefined) {
            if (typeof options.color === "string") {
                trianglesColorStringValue = options.color;
            } else if (typeof options.color.value === "string") {
                trianglesColorStringValue = options.color.value;
            } else {
                let rgb = options.color.value as IRgb;
                const hsl = options.color.value as IHsl;

                if (hsl.h !== undefined) {
                    rgb = ColorUtils.hslToRgb(hsl);
                }

                trianglesColorStringValue = `${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`;
            }
        }

        group.addProperty(
            "color",
            "Color",
            trianglesColorStringValue,
            "color",
            async (value: string | number | boolean) => {
                if (typeof value === "string") {
                    if (typeof options.color === "string") {
                        options.color = value;
                    } else {
                        if (options.color === undefined) {
                            options.color = {
                                value: value,
                            };
                        } else {
                            options.color.value = value;
                        }
                    }

                    await particles.refresh();
                }
            }
        );

        group.addProperty(
            "enable",
            "Enable",
            options.enable,
            typeof options.enable,
            (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.enable = value;

                    particles.refresh();
                }
            }
        );

        const trianglesOpacityInput = group.addProperty(
            "opacity",
            "Opacity",
            options.opacity,
            typeof options.opacity,
            (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.opacity = value;

                    particles.refresh();
                }
            }
        );

        (trianglesOpacityInput.element as HTMLInputElement).step = "0.01";
    }

    private addLinks(): void {
        const particles = this.particles;
        const options = this.options;
        let colorStringValue: string | undefined;

        if (typeof options.color === "string") {
            colorStringValue = options.color;
        } else if (typeof options.color.value === "string") {
            colorStringValue = options.color.value;
        } else {
            let rgb = options.color.value as IRgb;
            const hsl = options.color.value as IHsl;

            if (hsl.h !== undefined) {
                rgb = ColorUtils.hslToRgb(hsl);
            }

            colorStringValue = `${rgb.r.toString(16)}${rgb.g.toString(16)}${rgb.b.toString(16)}`;
        }

        this.group.addProperty(
            "blink",
            "Blink",
            options.blink,
            typeof options.blink,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.blink = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "color",
            "Color",
            colorStringValue,
            "color",
            async (value: string | number | boolean) => {
                if (typeof value === "string") {
                    if (typeof options.color === "string") {
                        options.color = value;
                    } else {
                        options.color.value = value;
                    }

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "consent",
            "Consent",
            options.consent,
            typeof options.consent,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.consent = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "distance",
            "Distance",
            options.distance,
            typeof options.distance,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.distance = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "enable",
            "Enable",
            options.enable,
            typeof options.enable,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.enable = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty("id", "Id", options.id, "string", async (value: number | string | boolean) => {
            if (typeof value === "string") {
                options.id = value;

                await particles.refresh();
            }
        });

        const opacityInput = this.group.addProperty(
            "opacity",
            "Opacity",
            options.opacity,
            typeof options.opacity,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.opacity = value;

                    await particles.refresh();
                }
            }
        ) as EditorNumberInput;

        opacityInput.step(0.01).min(0).max(1);

        this.group.addProperty(
            "warp",
            "Warp",
            options.warp,
            typeof options.warp,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.warp = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "width",
            "Width",
            options.width,
            typeof options.width,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.width = value;

                    await particles.refresh();
                }
            }
        );
    }
}
