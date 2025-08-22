"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Timeline = "Urgent" | "Short-term" | "Medium-term" | "Long-term";

type ApplicationType = "Food" | "Health" | "Non-Food";

const processingOptions = [
  "Heat",
  "UHT",
  "Baking",
  "Extrusion",
  "Acidic pH",
  "Neutral pH",
  "Fermentation",
  "Freezing",
];

const foodMatrixOptions = [
  {
    label: "Beverage",
    items: [
      "Carbonated",
      "Juice",
      "Alcoholic",
      "RTD coffee & tea",
      "Energy",
      "Flavoured water",
    ],
  },
  {
    label: "Bakery & Cereals",
    items: ["Bread", "Cakes", "Biscuits", "Cereals", "Snack bars"],
  },
  {
    label: "Dairy & Alternatives",
    items: ["Milk", "Yogurt", "Cheese", "Plant-based", "Ice cream"],
  },
  {
    label: "Confectionery",
    items: ["Sugar", "Chocolate", "Chewing gum", "Lozenges"],
  },
  {
    label: "Savoury & Culinary",
    items: ["Soups", "Sauces", "Ready meals", "Snacks", "Instant noodles"],
  },
  {
    label: "Meat & Plant-Based Proteins",
    items: ["Processed meat", "Seafood", "Analogues"],
  },
  {
    label: "Snacks",
    items: ["Extruded", "Nuts", "Coated snacks"],
  },
];

export default function Home() {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [country, setCountry] = useState("");
  const [projectName, setProjectName] = useState("");
  const [businessBrief, setBusinessBrief] = useState("");
  const [timeline, setTimeline] = useState<Timeline | "">("Short-term");

  const [applicationType, setApplicationType] = useState<ApplicationType | "">(
    ""
  );
  const [foodMatrix, setFoodMatrix] = useState("");
  const [healthMatrix, setHealthMatrix] = useState("");
  const [nonFoodMatrix, setNonFoodMatrix] = useState("");

  const [processingConditions, setProcessingConditions] = useState<string[]>(
    []
  );

  const [shelfLife, setShelfLife] = useState("6-12 months");
  const [formatRequired, setFormatRequired] = useState("Liquid");
  const [legalStatus, setLegalStatus] = useState("Natural");
  const [certifications, setCertifications] = useState<string[]>([]);

  const [sampleVolume, setSampleVolume] = useState("30g");
  const [documentsNeeded, setDocumentsNeeded] = useState<string[]>([]);

  const [accountType, setAccountType] = useState("Strategic");
  const [commercialPotential, setCommercialPotential] = useState("Trial");
  const [internalPriority, setInternalPriority] = useState("Medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      company,
      contactName,
      contactEmail,
      contactPhone,
      country,
      projectName,
      businessBrief,
      timeline,
      applicationType,
      foodMatrix,
      healthMatrix,
      nonFoodMatrix,
      processingConditions,
      shelfLife,
      formatRequired,
      legalStatus,
      certifications,
      sampleVolume,
      documentsNeeded,
      accountType,
      commercialPotential,
      internalPriority,
    };

    console.log("Form submit:", payload);
    alert("Form submitted — check console for payload (dev only)");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-start justify-center py-12 px-6 sm:px-12">
      <div className="w-full max-w-4xl">
        <header className="flex justify-center mb-6">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={160}
            height={30}
            className="dark:invert"
          />
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-card/70 backdrop-blur-sm border border-border rounded-2xl shadow-lg p-6 sm:p-10 grid gap-6"
        >
          <h1 className="text-2xl font-semibold text-center">
            Customer Request Form
          </h1>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <Label>Company</Label>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Foods Ltd"
                required
              />
            </label>

            <label className="flex flex-col gap-2">
              <Label>Country</Label>
              <Input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. United Kingdom"
              />
            </label>

            <label className="flex flex-col gap-2">
              <Label>Contact (Name)</Label>
              <Input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </label>

            <label className="flex flex-col gap-2">
              <Label>Contact (Email / Phone)</Label>
              <div className="flex gap-2">
                <Input
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="name@company.com"
                />
                <Input
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+44 7000 000000"
                />
              </div>
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <Label>Project Name / Internal Reference Code</Label>
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <Label>Business Brief (short)</Label>
              <Textarea
                value={businessBrief}
                onChange={(e) => setBusinessBrief(e.target.value)}
                className="h-24 resize-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <Label>Timeline / Urgency</Label>
              <Select
                value={timeline}
                onValueChange={(v) => setTimeline(v as Timeline)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Urgent">Urgent &lt;1 week</SelectItem>
                  <SelectItem value="Short-term">
                    Short-term 1–2 months
                  </SelectItem>
                  <SelectItem value="Medium-term">
                    Medium-term 3–6 months
                  </SelectItem>
                  <SelectItem value="Long-term">
                    Long-term &gt;6 months
                  </SelectItem>
                </SelectContent>
              </Select>
            </label>
          </section>

          <hr className="border-border/60" />

          <section>
            <h2 className="text-lg font-medium mb-3">
              Application Environment
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex flex-col gap-2 sm:col-span-3">
                <Label>Application Type</Label>
                <div className="flex gap-3">
                  {(["Food", "Health", "Non-Food"] as ApplicationType[]).map(
                    (t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setApplicationType(t);
                          setFoodMatrix("");
                          setHealthMatrix("");
                          setNonFoodMatrix("");
                        }}
                        className={`px-3 py-1 rounded-md border ${
                          applicationType === t
                            ? "bg-primary text-primary-foreground"
                            : "bg-transparent"
                        }`}
                      >
                        {t}
                      </button>
                    )
                  )}
                </div>
              </label>

              {applicationType === "Food" && (
                <label className="flex flex-col gap-2 sm:col-span-3">
                  <span className="text-sm font-medium">
                    Food Matrix (choose one)
                  </span>
                  <Select
                    value={foodMatrix}
                    onValueChange={(v) => setFoodMatrix(v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select food category →" />
                    </SelectTrigger>
                    <SelectContent>
                      {foodMatrixOptions.map((group) => (
                        <SelectGroup key={group.label}>
                          <SelectLabel>{group.label}</SelectLabel>
                          {group.items.map((it) => (
                            <SelectItem
                              key={it}
                              value={`${group.label} > ${it}`}
                            >
                              {group.label} — {it}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
              )}

              {applicationType === "Health" && (
                <label className="flex flex-col gap-2 sm:col-span-3">
                  <span className="text-sm font-medium">Health Matrix</span>
                  <Select
                    value={healthMatrix}
                    onValueChange={(v) => setHealthMatrix(v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nutraceuticals">
                        Nutraceuticals
                      </SelectItem>
                      <SelectItem value="Infant nutrition">
                        Infant nutrition
                      </SelectItem>
                      <SelectItem value="Medical nutrition">
                        Medical nutrition
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </label>
              )}

              {applicationType === "Non-Food" && (
                <label className="flex flex-col gap-2 sm:col-span-3">
                  <span className="text-sm font-medium">Non-Food Matrix</span>
                  <Select
                    value={nonFoodMatrix}
                    onValueChange={(v) => setNonFoodMatrix(v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pharma">Pharma</SelectItem>
                      <SelectItem value="Oral Care">Oral Care</SelectItem>
                      <SelectItem value="Personal Care">
                        Personal Care
                      </SelectItem>
                      <SelectItem value="Cosmetics">Cosmetics</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
              )}

              <div className="sm:col-span-3">
                <span className="text-sm font-medium">
                  Processing Conditions (multi-select)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {processingOptions.map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <Checkbox
                        checked={processingConditions.includes(opt)}
                        onCheckedChange={(checked) => {
                          const isChecked = !!checked;
                          if (isChecked)
                            setProcessingConditions([
                              ...processingConditions,
                              opt,
                            ]);
                          else
                            setProcessingConditions(
                              processingConditions.filter((x) => x !== opt)
                            );
                        }}
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">
                  Shelf Life Expectation
                </span>
                <Select
                  value={shelfLife}
                  onValueChange={(v) => setShelfLife(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<6 months">&lt;6 months</SelectItem>
                    <SelectItem value="6-12 months">6–12 months</SelectItem>
                    <SelectItem value=">12 months">&gt;12 months</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </section>

          <hr className="border-border/60" />

          <section>
            <h2 className="text-lg font-medium mb-3">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex flex-col gap-2">
                <Label>Format Required</Label>
                <Select
                  value={formatRequired}
                  onValueChange={(v: string) => setFormatRequired(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Liquid">Liquid</SelectItem>
                    <SelectItem value="Powder">Powder</SelectItem>
                    <SelectItem value="Encapsulated">Encapsulated</SelectItem>
                    <SelectItem value="No preference">No preference</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <label className="flex flex-col gap-2">
                <Label>Legal Status</Label>
                <Select
                  value={legalStatus}
                  onValueChange={(v: string) => setLegalStatus(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Natural">Natural</SelectItem>
                    <SelectItem value="Nature-Identical">
                      Nature-Identical
                    </SelectItem>
                    <SelectItem value="Synthetic">Synthetic</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <div>
                <Label>Required Certifications</Label>
                <div className="flex gap-2 mt-2">
                  {["Halal", "Kosher", "Both", "None"].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCertifications([c])}
                      className={`px-3 py-1 rounded-md border ${
                        certifications.includes(c)
                          ? "bg-primary text-primary-foreground"
                          : "bg-transparent"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border/60" />

          <section>
            <h2 className="text-lg font-medium mb-3">Samples & Logistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex flex-col gap-2">
                <Label>Sample Volume</Label>
                <Select
                  value={sampleVolume}
                  onValueChange={(v: string) => setSampleVolume(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30g">30g</SelectItem>
                    <SelectItem value="50g">50g</SelectItem>
                    <SelectItem value="100g">100g</SelectItem>
                    <SelectItem value="other">other</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <div className="sm:col-span-2">
                <span className="text-sm font-medium">Documents Needed</span>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {["TDS", "SDS", "Halal", "Kosher", "Other"].map((d) => (
                    <label
                      key={d}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-md border"
                    >
                      <Checkbox
                        checked={documentsNeeded.includes(d)}
                        onCheckedChange={(checked) => {
                          const isChecked = !!checked;
                          if (isChecked)
                            setDocumentsNeeded([...documentsNeeded, d]);
                          else
                            setDocumentsNeeded(
                              documentsNeeded.filter((x) => x !== d)
                            );
                        }}
                      />
                      <span className="text-sm">{d}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border/60" />

          <section>
            <h2 className="text-lg font-medium mb-3">
              Commercial Context (Internal Only)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">Account Type</span>
                <Select
                  value={accountType}
                  onValueChange={(v: string) => setAccountType(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Strategic">Strategic</SelectItem>
                    <SelectItem value="Growth">Growth</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Transactional">Transactional</SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">
                  Commercial Potential
                </span>
                <Select
                  value={commercialPotential}
                  onValueChange={(v: string) => setCommercialPotential(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Trial">Trial</SelectItem>
                    <SelectItem value="Pilot <1MT">Pilot &lt;1MT</SelectItem>
                    <SelectItem value="Commercial >10MT">
                      Commercial &gt;10MT
                    </SelectItem>
                  </SelectContent>
                </Select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium">
                  Internal Priority Level
                </span>
                <Select
                  value={internalPriority}
                  onValueChange={(v: string) => setInternalPriority(v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </label>
            </div>
          </section>

          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-muted">
              All fields are editable — this is a demo form.
            </div>

            <div className="flex gap-2">
              <button
                type="reset"
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-md border"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
